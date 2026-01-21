import Link from "next/link";

// Später: dynamisch aus /content/projects laden
const projects = [
  { slug: "hochzeit-am-see", title: "Hochzeit am See", category: "wedding", year: "2026" },
  { slug: "romantische-hochzeit", title: "Romantische Hochzeit", category: "wedding", year: "2025" },
  { slug: "portrait-serie", title: "Portrait Serie", category: "portrait", year: "2025" },
  { slug: "corporate-headshots", title: "Corporate Headshots", category: "portrait", year: "2025" },
  { slug: "business-event", title: "Business Event", category: "event", year: "2024" },
  { slug: "kunstausstellung", title: "Kunstausstellung", category: "event", year: "2024" },
];

const categories = [
  { id: "all", label: "Alle", count: 6 },
  { id: "wedding", label: "Hochzeiten", count: 2 },
  { id: "portrait", label: "Portraits", count: 2 },
  { id: "event", label: "Events", count: 2 },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            <span className="font-playfair italic">Meine Arbeiten</span>
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg">
            Eine Auswahl meiner liebsten Projekte aus den Bereichen 
            Hochzeit, Portrait und Event-Fotografie.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-12 sticky top-20 z-40 bg-neutral-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-6 py-3 text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                  cat.id === "all" 
                    ? "bg-white text-neutral-900" 
                    : "text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500"
                }`}
              >
                {cat.label}
                <span className="ml-2 text-xs opacity-50">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group relative"
              >
                <div className={`relative overflow-hidden ${
                  index % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}>
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Content - always visible on mobile, hover on desktop */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white/60 text-xs uppercase tracking-wider">
                        {categories.find(c => c.id === project.category)?.label} · {project.year}
                      </span>
                      <h3 className="text-white text-xl md:text-2xl font-light mt-2 font-playfair italic">
                        {project.title}
                      </h3>
                      <span className="inline-block mt-4 text-white/80 text-sm uppercase tracking-wider border-b border-white/30 pb-1">
                        Projekt ansehen
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            <span className="font-playfair italic">Gefällt dir meine Arbeit?</span>
          </h2>
          <p className="text-neutral-600 mb-10">
            Lass uns gemeinsam dein nächstes Projekt planen. 
            Ich freue mich auf deine Nachricht.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-neutral-900 text-white text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}
