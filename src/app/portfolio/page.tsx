import Link from "next/link";

// Später: dynamisch aus /content/projects laden
const projects = [
  { slug: "hochzeit-am-see", title: "Hochzeit am See", category: "wedding" },
  { slug: "portrait-serie", title: "Portrait Serie", category: "portrait" },
  { slug: "business-event", title: "Business Event", category: "event" },
];

const categories = [
  { id: "all", label: "Alle" },
  { id: "wedding", label: "Hochzeiten" },
  { id: "portrait", label: "Portraits" },
  { id: "event", label: "Events" },
];

export default function PortfolioPage() {
  return (
    <main className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group"
            >
              <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition">
                  Bild
                </div>
              </div>
              <h3 className="font-semibold group-hover:underline">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
