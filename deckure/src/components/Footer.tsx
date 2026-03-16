import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-amber-900/10 bg-forest/5">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-semibold text-forest">
              Deckure
            </p>
            <p className="mt-2 text-sm text-forest/70">
              Premium Islamic wall art and MDF wood calligraphy. Elegant home
              decor for your space.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest/80">
              Shop
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/collections/islamic-calligraphy"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  Islamic Calligraphy
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/mdf-wall-art"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  MDF Wall Art
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/home-decor"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest/80">
              Support
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/cod"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  Cash on Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-forest/80 transition hover:text-forest"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest/80">
              Contact
            </h3>
            <p className="mt-3 text-sm text-forest/80">
              Pakistan
            </p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm font-medium text-forest transition hover:text-forest/80"
            >
              WhatsApp: +92 300 1234567
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-900/10 pt-8 text-center text-sm text-forest/60">
          <p>© {new Date().getFullYear()} Deckure. Premium Islamic Wall Art.</p>
        </div>
      </div>
    </footer>
  );
}
