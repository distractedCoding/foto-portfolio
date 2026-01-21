import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "[Fotografen Name] | Fotografie",
  description: "Professionelle Fotografie für Hochzeiten, Portraits und Events",
  keywords: ["Fotograf", "Hochzeitsfotograf", "Portrait", "Fotografie"],
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-light tracking-widest text-white hover:opacity-70 transition-opacity"
          >
            STUDIO
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link 
              href="/portfolio" 
              className="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase"
            >
              Über mich
            </Link>
            <Link 
              href="/contact" 
              className="text-sm tracking-wider text-white/90 hover:text-white transition-colors uppercase"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-4">STUDIO</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professionelle Fotografie für die Momente, die zählen.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-neutral-500">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-neutral-300 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">Über mich</Link>
              <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-neutral-500">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} [Fotografen Name]. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
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
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <div className="page-transition">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
