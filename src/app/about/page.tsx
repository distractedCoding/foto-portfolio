import Link from "next/link";

export const metadata = {
  title: "Über mich | [Fotografen Name]",
};

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Jahre Erfahrung" },
    { number: "200+", label: "Hochzeiten" },
    { number: "500+", label: "Zufriedene Kunden" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-16 px-6 bg-neutral-950">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto w-full pt-32">
          <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Über mich</p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            <span className="font-playfair italic">Hallo, ich bin<br />[Name]</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                Portrait Foto
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                <span className="font-playfair italic">
                  Fotograf aus Leidenschaft,<br />
                  Geschichtenerzähler aus Überzeugung
                </span>
              </h2>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Seit über einem Jahrzehnt halte ich die besonderen Momente im Leben fest. 
                  Was als Hobby begann, ist heute meine Berufung – und ich bin dankbar, 
                  dass ich jeden Tag das tun darf, was ich liebe.
                </p>
                <p>
                  Meine Philosophie ist einfach: Authentizität über Perfektion. 
                  Ich glaube nicht an gestellte Posen und erzwungene Lächeln. 
                  Stattdessen fange ich echte Emotionen ein – die leisen Momente, 
                  die liebevollen Blicke, die ungeplanten Augenblicke voller Freude.
                </p>
                <p>
                  Jede Hochzeit, jedes Portrait, jedes Event erzählt eine einzigartige Geschichte. 
                  Mein Ziel ist es, diese Geschichten so festzuhalten, wie sie wirklich sind – 
                  ehrlich, emotional und zeitlos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl md:text-6xl font-light font-playfair mb-2">{stat.number}</p>
                <p className="text-neutral-500 uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-500 text-sm uppercase tracking-wider mb-6">Philosophie</p>
          <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
            <span className="font-playfair italic">
              „Ein gutes Foto hält einen Moment fest.<br />
              Ein großartiges Foto erzählt eine Geschichte."
            </span>
          </h2>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Mein Ansatz</p>
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="font-playfair italic">Wie ich arbeite</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl font-light text-neutral-300 border border-neutral-200 rounded-full">
                1
              </div>
              <h3 className="text-xl font-light mb-4 font-playfair italic">Kennenlernen</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Wir treffen uns für ein entspanntes Gespräch – persönlich oder per Video. 
                Ich möchte euch kennenlernen und eure Geschichte verstehen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl font-light text-neutral-300 border border-neutral-200 rounded-full">
                2
              </div>
              <h3 className="text-xl font-light mb-4 font-playfair italic">Der Tag</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ich bin mehr als nur ein Fotograf – ich bin Teil eures Tages. 
                Diskret im Hintergrund, aber immer bereit, den perfekten Moment einzufangen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl font-light text-neutral-300 border border-neutral-200 rounded-full">
                3
              </div>
              <h3 className="text-xl font-light mb-4 font-playfair italic">Die Bilder</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Nach sorgfältiger Bearbeitung erhaltet ihr eure Bilder in einer 
                Online-Galerie – zum Teilen, Herunterladen und für immer Behalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment (optional) */}
      <section className="py-24 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Ausrüstung</p>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                <span className="font-playfair italic">Technik, die inspiriert</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Ich arbeite ausschließlich mit professionellem Equipment von Sony und Canon. 
                Hochwertige Objektive und zuverlässige Technik sind die Basis für 
                außergewöhnliche Bilder.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Aber am Ende ist es nicht die Kamera, die das Bild macht – 
                es ist das Auge dahinter.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative aspect-[4/3] bg-neutral-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                Equipment Foto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="font-playfair italic">Bereit für dein Projekt?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Ich freue mich darauf, deine Geschichte zu erzählen. 
            Lass uns gemeinsam etwas Besonderes schaffen.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-white text-neutral-900 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}
