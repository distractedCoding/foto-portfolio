# AGENTS.md - Fotografen-Portfolio

## Projekt-Kontext
Persönliche Website für einen Fotografen. Kein CMS – Content als MDX im Repo.

## Tech Stack
- Next.js 16 (App Router)
- MDX für Content-Seiten
- Tailwind CSS
- TypeScript

## Coding Guidelines

### Allgemein
- Prefer clear function/variable names over inline comments
- Avoid helper functions when a simple inline expression would suffice
- Don't use emojis in code

### React
- Avoid massive JSX blocks, compose smaller components
- Colocate code that changes together
- Avoid useEffect unless absolutely needed

### Tailwind
- Use built-in values, avoid arbitrary values where possible
- Mobile-first responsive design

### Next.js
- Content pages use MDX
- Use next/image for all images with proper optimization
- For above-the-fold images, use priority prop

### TypeScript
- Don't unnecessarily add try/catch
- Don't cast to any

## Struktur

```
/content/           # MDX Content (Fotograf editiert hier)
  /projects/        # Portfolio-Projekte
  about.mdx         # Über mich
/public/images/     # Bilder
/src/app/           # Next.js App Router
```

## Offene Tasks
- [ ] Dynamisches Laden der Projekte aus /content/projects
- [ ] Galerie-Komponente mit Lightbox
- [ ] Bildoptimierung konfigurieren
- [ ] Kontaktformular mit Server Action
- [ ] SEO Metadata
- [ ] Open Graph Images
