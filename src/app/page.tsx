import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const categories = [
    { name: "Hochzeiten", slug: "wedding", count: 12 },
    { name: "Portraits", slug: "portrait", count: 8 },
    { name: "Events", slug: "event", count: 15 },
  ];

  return (
    <main>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-neutral-900">
          {/* Replace with actual image */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-6 animate-reveal opacity-0">
            Fotografie
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light text-white tracking-tight mb-8 animate-reveal opacity-0 delay-100">
            <span className="font-playfair italic">[Name]</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 animate-reveal opacity-0 delay-200 max-w-2xl mx-auto leading-relaxed">
            Ich fange Momente ein, die für immer bleiben. 
            Authentisch, emotional, zeitlos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal opacity-0 delay-300">
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-white text-neutral-900 text-sm uppercase tracking-wider hover:bg-neutral-100 transition-colors"
            >
              Portfolio entdecken
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/50 text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              <span className="font-playfair italic">Kategorien</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Jedes Projekt erzählt eine einzigartige Geschichte
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Link 
                key={cat.slug}
                href={`/portfolio?category=${cat.slug}`}
                className="group relative aspect-[4/5] overflow-hidden cursor-zoom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">
                    {cat.count} Projekte
                  </span>
                  <h3 className="text-3xl font-light font-playfair italic">
                    {cat.name}
                  </h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm uppercase tracking-wider border-b border-white/50 pb-1">
                      Ansehen
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">Ausgewählt</p>
              <h2 className="text-3xl md:text-4xl font-light">
                <span className="font-playfair italic">Aktuelle Arbeiten</span>
              </h2>
            </div>
            <Link 
              href="/portfolio" 
              className="text-sm uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors border-b border-neutral-300 pb-1"
            >
              Alle ansehen →
            </Link>
          </div>

          {/* Masonry Grid */}
          <div className="masonry">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="masonry-item img-hover group cursor-zoom"
              >
                <Link href={`/portfolio/project-${i}`}>
                  <div 
                    className={`relative bg-neutral-200 ${
                      i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'
                    }`}
                  >
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 group-hover:text-neutral-600 transition-colors">
                      <span className="text-sm">Bild {i}</span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Title on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-light">Projekt {i}</p>
                      <p className="text-white/60 text-sm">Hochzeit</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-neutral-300 img-hover">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                Portrait Foto
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:pl-12">
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Über mich</p>
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                <span className="font-playfair italic">Hallo, ich bin<br />[Name]</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Seit über X Jahren halte ich besondere Momente fest. Meine Leidenschaft 
                gilt der natürlichen, authentischen Fotografie – ohne gestellte Posen, 
                dafür mit echten Emotionen.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-10">
                Ich glaube daran, dass jedes Bild eine Geschichte erzählt. Mein Ziel ist es, 
                diese Geschichten so einzufangen, wie sie wirklich sind – ehrlich, emotional 
                und unvergesslich.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-neutral-900 text-white text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 font-playfair italic">
            „Die Bilder haben jeden Moment unserer Hochzeit perfekt eingefangen. 
            Wir sind überwältigt von der Qualität und der Liebe zum Detail."
          </blockquote>
          <cite className="text-neutral-400 text-sm uppercase tracking-wider not-italic">
            — Sarah & Michael
          </cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="font-playfair italic">Lass uns<br />zusammenarbeiten</span>
          </h2>
          <p className="text-neutral-600 text-lg mb-10 max-w-xl mx-auto">
            Hast du ein Projekt im Kopf? Ich freue mich auf deine Nachricht 
            und darauf, deine Geschichte zu erzählen.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-neutral-900 text-white text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}
