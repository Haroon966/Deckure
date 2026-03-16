import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-wide text-forest transition hover:text-forest/90"
        >
          Deckure
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            href="/collections/islamic-calligraphy"
            className="text-sm font-medium text-forest/90 transition hover:text-forest"
          >
            Calligraphy
          </Link>
          <Link
            href="/collections/mdf-wall-art"
            className="text-sm font-medium text-forest/90 transition hover:text-forest"
          >
            Wall Art
          </Link>
          <Link
            href="/collections/home-decor"
            className="text-sm font-medium text-forest/90 transition hover:text-forest"
          >
            Home Decor
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium text-forest/90 transition hover:text-forest"
          >
            Guide
          </Link>
          <Link
            href="/cart"
            className="text-sm font-medium text-forest/90 transition hover:text-forest"
          >
            Cart
          </Link>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-forest px-3 py-1.5 text-sm font-medium text-cream transition hover:bg-forest/90"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
