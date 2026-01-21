# Fotografen-Portfolio

Persönliche Portfolio-Website – gebaut mit Next.js + MDX, ohne CMS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Content:** MDX (Markdown + React Components)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (empfohlen)

## Lokale Entwicklung

```bash
pnpm install
pnpm dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Content bearbeiten

### Projekte hinzufügen

Erstelle eine neue `.mdx` Datei in `/content/projects/`:

```mdx
---
title: "Projekt Name"
date: "2026-01-20"
category: "wedding"
cover: "/images/cover.jpg"
featured: true
---

# Projekt Name

Beschreibung des Shootings...
```

### Über mich bearbeiten

Bearbeite `/src/app/about/page.mdx` direkt.

### Bilder hinzufügen

1. Lade Bilder in `/public/images/` hoch
2. Referenziere sie in MDX: `![Alt Text](/images/bild.jpg)`

## Deployment

### Vercel (empfohlen)

1. Repo mit Vercel verbinden: [vercel.com/new](https://vercel.com/new)
2. Done – jeder Push deployed automatisch

### Manuell

```bash
pnpm build
pnpm start
```

## Für den Fotografen: Content pflegen

Du brauchst keinen Code zu schreiben! So geht's:

1. Gehe zu [GitHub](https://github.com/distractedCoding/foto-portfolio)
2. Navigiere zu `/content/projects/`
3. Klicke "Add file" → "Create new file"
4. Benenne es `mein-projekt.mdx`
5. Füge den Content ein (siehe Beispiel oben)
6. Klicke "Commit changes"
7. Die Website aktualisiert sich automatisch! ✨

## Lizenz

MIT
