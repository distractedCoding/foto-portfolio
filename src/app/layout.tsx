import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Fotografen Name] | Fotografie",
  description: "Professionelle Fotografie für Hochzeiten, Portraits und Events",
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          [Name]
        </Link>
        <div className="flex gap-8">
          <Link href="/portfolio" className="hover:text-gray-600 transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition">
            Über mich
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} [Fotografen Name]. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/impressum" className="hover:text-gray-900">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-gray-900">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
