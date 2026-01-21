export const metadata = {
  title: "Kontakt | [Fotografen Name]",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
        <p className="text-gray-600 mb-8">
          Ich freue mich auf deine Nachricht! Erzähl mir von deinem Projekt.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-2">
              Art des Shootings
            </label>
            <select
              id="type"
              name="type"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
            >
              <option value="">Bitte wählen...</option>
              <option value="wedding">Hochzeit</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="other">Sonstiges</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Nachricht senden
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="font-semibold mb-4">Oder direkt erreichen:</h2>
          <p className="text-gray-600">
            E-Mail:{" "}
            <a href="mailto:email@example.com" className="hover:underline">
              email@example.com
            </a>
          </p>
          <p className="text-gray-600">
            Instagram:{" "}
            <a
              href="https://instagram.com/username"
              className="hover:underline"
            >
              @username
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
