/**
 * Månadsvis trafikrapport för lantmanna.nu.
 *
 * Triggas av Vercel Cron (vercel.json) den 1:a varje månad kl 09:00 CET.
 * Skickar HTML-mail via Postmark till anna@lantmanna.nu + cc till jesper.
 *
 * Skyddad med CRON_SECRET — Vercel Cron skickar Authorization-header automatiskt.
 *
 * För manuell test:
 *   curl -i "$URL/api/cron/monthly-report" -H "Authorization: Bearer $CRON_SECRET"
 */

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// ─── Config ────────────────────────────────────────────────────────────────

const FROM_EMAIL = 'Lantmanna Webbrapport <jesper@humanji.se>';
const RECIPIENTS = (
  process.env.REPORT_RECIPIENTS ?? 'anna@lantmanna.nu,jesper@safelanegaming.com'
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID; // sätts auto i runtime
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID; // för team-konton (humanji)

// ─── Date helpers ──────────────────────────────────────────────────────────

const SWEDISH_MONTHS = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
];

function previousMonthRange() {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  const label = `${SWEDISH_MONTHS[start.getUTCMonth()]} ${start.getUTCFullYear()}`;
  return { from: start.toISOString(), to: end.toISOString(), label };
}

// ─── Vercel Analytics fetcher ──────────────────────────────────────────────
// Endpointen är /v1/web/insights/* med projectId + teamId + från/till-tider.
// Eftersom Vercels API kan ändras hanterar vi failures gracefully så cron
// inte kraschar — istället mailar vi att data inte gick att hämta.

async function fetchVercelAnalytics(from: string, to: string) {
  const token = process.env.VERCEL_API_TOKEN;
  if (!token || !VERCEL_PROJECT_ID) {
    return { error: 'Saknar VERCEL_API_TOKEN eller VERCEL_PROJECT_ID' };
  }

  const teamQuery = VERCEL_TEAM_ID ? `&teamId=${VERCEL_TEAM_ID}` : '';
  const params = `projectId=${VERCEL_PROJECT_ID}${teamQuery}&from=${from}&to=${to}`;

  async function get(path: string) {
    const res = await fetch(`https://api.vercel.com${path}?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`${path} → ${res.status}`);
    return res.json();
  }

  try {
    const [overview, pages, referrers, devices, countries] = await Promise.all([
      get('/v1/web/insights/stats'),
      get('/v1/web/insights/top-pages'),
      get('/v1/web/insights/top-referrers'),
      get('/v1/web/insights/devices'),
      get('/v1/web/insights/countries'),
    ]);
    return { overview, pages, referrers, devices, countries };
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'okänt fel' };
  }
}

// ─── Email template ────────────────────────────────────────────────────────

function fmt(n: unknown): string {
  if (typeof n !== 'number' || !Number.isFinite(n)) return '–';
  return n.toLocaleString('sv-SE');
}

function buildHtml(label: string, data: Awaited<ReturnType<typeof fetchVercelAnalytics>>) {
  const errorBanner =
    'error' in data && data.error
      ? `<p style="background:#fff3cd;border:1px solid #ffeeba;padding:12px;border-radius:8px;color:#856404">⚠️ Kunde inte hämta full data från Vercel Analytics: ${data.error}. Logga in på Vercel-dashboarden för fullständiga siffror.</p>`
      : '';

  // Förenklad rendering — Vercel Analytics-API:et returnerar olika strukturer
  // beroende på endpoint, så vi extraherar konservativt.
  const rows = (arr: unknown): Array<{ key: string; value: number }> => {
    if (!Array.isArray(arr)) return [];
    return arr
      .map((r) => ({
        key: String((r as { key?: string; name?: string; path?: string }).key ?? (r as Record<string, string>).name ?? (r as Record<string, string>).path ?? ''),
        value: Number((r as { count?: number; visitors?: number; views?: number }).count ?? (r as Record<string, number>).visitors ?? (r as Record<string, number>).views ?? 0),
      }))
      .filter((r) => r.key)
      .slice(0, 10);
  };

  const overview = !('error' in data) ? (data.overview as Record<string, number>) : {};
  const views = overview?.totalViews ?? overview?.pageviews ?? 0;
  const visitors = overview?.totalVisitors ?? overview?.visitors ?? 0;

  const topPages = !('error' in data) ? rows(data.pages) : [];
  const topReferrers = !('error' in data) ? rows(data.referrers) : [];
  const topDevices = !('error' in data) ? rows(data.devices) : [];
  const topCountries = !('error' in data) ? rows(data.countries) : [];

  const renderList = (
    title: string,
    items: Array<{ key: string; value: number }>,
    valueLabel: string,
  ) => `
    <h3 style="font-family:Georgia,serif;color:#2D6A3E;margin:20px 0 8px">${title}</h3>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${
        items.length === 0
          ? `<tr><td style="padding:6px 0;color:#888">Ingen data ännu.</td></tr>`
          : items
              .map(
                (r, i) => `
        <tr style="${i % 2 ? 'background:#FAF7F0' : ''}">
          <td style="padding:6px 8px">${i + 1}. ${r.key}</td>
          <td style="padding:6px 8px;text-align:right;color:#666">${fmt(r.value)} ${valueLabel}</td>
        </tr>`,
              )
              .join('')
      }
    </table>
  `;

  return `
  <!DOCTYPE html>
  <html lang="sv">
    <body style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:#FAF7F0;margin:0;padding:24px">
      <div style="max-width:640px;margin:0 auto;background:white;border-radius:12px;padding:32px;border:1px solid #e5e7eb">
        <p style="font-size:12px;color:#888;letter-spacing:1px;text-transform:uppercase;margin:0">Månadsrapport</p>
        <h1 style="font-family:Georgia,serif;color:#2D6A3E;font-size:32px;margin:8px 0 4px">Lantmanna.nu</h1>
        <p style="font-size:18px;color:#666;margin:0 0 24px">Trafiksammanställning — ${label}</p>

        ${errorBanner}

        <div style="display:flex;gap:16px;margin:24px 0;flex-wrap:wrap">
          <div style="flex:1;min-width:140px;background:#FAF7F0;padding:16px;border-radius:8px">
            <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px">Sidvisningar</div>
            <div style="font-family:Georgia,serif;font-size:32px;color:#2D6A3E;font-weight:600">${fmt(views)}</div>
          </div>
          <div style="flex:1;min-width:140px;background:#FAF7F0;padding:16px;border-radius:8px">
            <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px">Unika besökare</div>
            <div style="font-family:Georgia,serif;font-size:32px;color:#2D6A3E;font-weight:600">${fmt(visitors)}</div>
          </div>
        </div>

        ${renderList('📄 Toppsidor', topPages, 'visningar')}
        ${renderList('🌍 Varifrån', topReferrers, 'besök')}
        ${renderList('📱 Enheter', topDevices, 'besök')}
        ${renderList('🇸🇪 Länder', topCountries, 'besök')}

        <hr style="border:0;border-top:1px solid #e5e7eb;margin:32px 0 16px">
        <p style="font-size:12px;color:#888;line-height:1.6">
          Detta mail är autogenererat första vardagen varje månad och sammanställs från
          Vercel Web Analytics. Vill du se trafiken i realtid eller fördjupa dig i
          siffrorna — säg till Jesper så ger han åtkomst till dashboarden.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">
          Fjärås Lantmanna · <a href="https://lantmanna.nu" style="color:#2D6A3E">lantmanna.nu</a>
        </p>
      </div>
    </body>
  </html>`;
}

// ─── Postmark sender ───────────────────────────────────────────────────────

async function sendMail(subject: string, html: string) {
  const token = process.env.POSTMARK_TOKEN;
  if (!token) throw new Error('Saknar POSTMARK_TOKEN');

  const [primary, ...cc] = RECIPIENTS;

  const res = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      'X-Postmark-Server-Token': token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      From: FROM_EMAIL,
      To: primary,
      Cc: cc.join(','),
      Subject: subject,
      HtmlBody: html,
      MessageStream: 'outbound',
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Postmark ${res.status}: ${errBody}`);
  }
  return res.json();
}

// ─── Cron handler ──────────────────────────────────────────────────────────

export async function GET(req: Request) {
  // Verifiera Vercel Cron-signaturen (eller manuell test med samma secret)
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { from, to, label } = previousMonthRange();
  const data = await fetchVercelAnalytics(from, to);
  const html = buildHtml(label, data);
  const subject = `Lantmanna.nu — Månadsrapport ${label}`;

  try {
    const sent = await sendMail(subject, html);
    return NextResponse.json({
      ok: true,
      label,
      recipients: RECIPIENTS,
      messageId: sent.MessageID,
    });
  } catch (err) {
    console.error('[monthly-report] failed:', err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'okänt fel' },
      { status: 500 },
    );
  }
}
