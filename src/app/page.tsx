import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            [Fotografen Name]
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Hochzeiten · Portraits · Events
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Portfolio ansehen
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Ausgewählte Arbeiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards - will be dynamic later */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Bild {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Hallo!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ich bin [Name] – Fotograf aus Leidenschaft. Ich fange die besonderen
            Momente ein, die ihr für immer behalten wollt.
          </p>
          <Link
            href="/about"
            className="text-gray-900 font-semibold hover:underline"
          >
            Mehr erfahren →
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Lass uns zusammenarbeiten</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Hast du ein Projekt im Kopf? Ich freue mich auf deine Nachricht.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </main>
  );
}
