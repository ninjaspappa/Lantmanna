'use client';

// Minimal stub — Agent 3 will expand and wire into JordsackSection.
type Props = { url: string; title?: string; text?: string };

export default function ShareLocationButton({ url, title, text }: Props) {
  const handleClick = async () => {
    try {
      const nav: Navigator | undefined =
        typeof navigator !== 'undefined' ? navigator : undefined;
      if (nav && typeof nav.share === 'function') {
        await nav.share({ url, title, text });
        return;
      }
      if (nav?.clipboard) {
        await nav.clipboard.writeText(url);
        alert('Länk kopierad!');
      }
    } catch {
      /* user cancelled or unsupported — no-op */
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-md bg-earth px-4 py-2 text-sm font-medium text-earth-foreground hover:bg-earth/90"
    >
      Dela plats
    </button>
  );
}
