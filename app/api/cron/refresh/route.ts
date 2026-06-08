/**
 * Daglig "freshness"-cron för lantmanna.nu.
 *
 * Triggas av Vercel Cron (se vercel.json) varje natt kl 04:00 UTC ≈ 05–06
 * lokal tid. Anropar revalidatePath() på sitemap + alla publika sidor så att:
 *
 *   1. sitemap.xml får ny `lastModified`-stämpel (signalerar fräschhet till
 *      Google / Bing / AI-bottar utan att vi behöver deploya).
 *   2. JSON-LD-objekten (StructuredData.tsx) räknar om `dateModified` så att
 *      Schema.org-strukturen rullar framåt dagligen.
 *
 * Skyddad med CRON_SECRET — samma envar som monthly-report.
 *
 * Manuell test:
 *   curl -i "$URL/api/cron/refresh" -H "Authorization: Bearer $CRON_SECRET"
 */

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const PATHS = ['/', '/jordsackar', '/kontakt', '/om-oss', '/integritet', '/sitemap.xml'];

export async function GET(req: Request) {
  const auth = req.headers.get('authorization');
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const revalidated: string[] = [];
  const failed: Array<{ path: string; error: string }> = [];

  for (const path of PATHS) {
    try {
      revalidatePath(path);
      revalidated.push(path);
    } catch (err) {
      failed.push({
        path,
        error: err instanceof Error ? err.message : 'okänt fel',
      });
    }
  }

  return NextResponse.json({
    ok: failed.length === 0,
    revalidatedAt: new Date().toISOString(),
    revalidated,
    failed,
  });
}
