export const metadata = {
  title: "Kontakt | [Fotografen Name]",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-neutral-500 text-sm uppercase tracking-wider mb-4">Kontakt</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            <span className="font-playfair italic">Lass uns reden</span>
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg">
            Du hast ein Projekt im Kopf? Ich freue mich auf deine Nachricht 
            und melde mich innerhalb von 24 Stunden bei dir.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-light mb-8">
                <span className="font-playfair italic">Anfrage senden</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-neutral-500 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-0 py-3 border-0 border-b-2 border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition bg-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-neutral-500 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-0 py-3 border-0 border-b-2 border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm uppercase tracking-wider text-neutral-500 mb-2">
                      Art des Shootings
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full px-0 py-3 border-0 border-b-2 border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition bg-transparent appearance-none"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="wedding">Hochzeit</option>
                      <option value="portrait">Portrait</option>
                      <option value="event">Event</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm uppercase tracking-wider text-neutral-500 mb-2">
                      Wunschtermin
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder="z.B. Mai 2026"
                      className="w-full px-0 py-3 border-0 border-b-2 border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider text-neutral-500 mb-2">
                    Deine Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Erzähl mir von deinem Projekt..."
                    className="w-full px-0 py-3 border-0 border-b-2 border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition bg-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 px-10 py-4 bg-neutral-900 text-white text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:pl-16">
              <h2 className="text-2xl font-light mb-8">
                <span className="font-playfair italic">Direkter Kontakt</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">E-Mail</p>
                  <a 
                    href="mailto:email@example.com" 
                    className="text-lg hover:text-neutral-600 transition-colors"
                  >
                    email@example.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Telefon</p>
                  <a 
                    href="tel:+491234567890" 
                    className="text-lg hover:text-neutral-600 transition-colors"
                  >
                    +49 123 456 7890
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Instagram</p>
                  <a 
                    href="https://instagram.com/username" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-neutral-600 transition-colors"
                  >
                    @username
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Standort</p>
                  <p className="text-lg">München, Deutschland</p>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-16 pt-12 border-t border-neutral-200">
                <h3 className="text-xl font-light mb-6 font-playfair italic">Häufige Fragen</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">Wie lange im Voraus sollte ich buchen?</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Für Hochzeiten empfehle ich eine Buchung 6-12 Monate im Voraus. 
                      Für andere Projekte reichen oft 2-4 Wochen.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Wann erhalte ich die Bilder?</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Die fertig bearbeiteten Bilder sind in der Regel 2-4 Wochen 
                      nach dem Shooting bereit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
