# Julian Harms Author Site

Static, ultra‑fast author website for the pen name **Julian Harms**. Built with
simple HTML/CSS/JS so it is easy to maintain and ideal for GitHub Pages.

## What's Included
- `index.html` — single‑page layout with sections: Hero, Books, About, Signup, Contact.
- `styles.css` — cover-led theme: palette sampled from the book covers, Big Shoulders Display titles, Literata body. No animations by design (hover/focus colour changes only).

## Current Status
- The site is fully functional as a static page.
- Newsletter CTA and dedicated signup section are in place.
- Flowdesk and BookFunnel are referenced with placeholders, ready to be wired in.

## How To Preview Locally
Internal links are root-relative (`/books/topside/`, `/blog/`), matching how the
live site is served, so opening `index.html` straight from disk won't navigate.
Run a static server from the repo root instead, e.g.:
- `python -m http.server 8000`, then open http://localhost:8000/
- or VS Code Live Server.

## Where To Customize
- Hero CTA: `index.html`
- Books grid: `index.html`
- About text: `index.html`
- Signup + newsletter embed: `index.html` section `#signup`
- Contact email and social links: `index.html`
- Colors, type, layout: `styles.css`

## Blog
- `blog/index.html` lists posts as cards, newest first.
- Each post lives at `blog/<slug>/index.html`. Copy `blog/hi-this-is-julian/` as a
  template; every post ends with the MailerLite reader-list signup.
- Cover images go in `images/blog/` at 1200x630. Use a `.webp` for the page `<img>`, and keep
  a `.jpg` of the same image for `og:image` / `twitter:image` / the RSS enclosure (some
  link-preview crawlers don't render WebP).
- Link between pages with clean root-relative URLs (`/blog/my-post/`), not `index.html` paths.
- To publish a post: add its folder, add a card at the top of `blog/index.html`,
  add an `<item>` at the top of `blog/feed.xml` (and bump `lastBuildDate`), and
  add its URL to `sitemap.xml`.

## Flowdesk + BookFunnel Integration
When ready, replace placeholders in the signup section:
- **Flowdesk**: paste the embed snippet into the `#signup` form container.
- **BookFunnel**: replace the placeholder with your delivery URL.

## Planned Next Steps
- Wire Flowdesk embed and BookFunnel delivery link.
- Add real book covers, blurbs, and links.
- Set up GitHub Pages deploy (once repo is created).

## Other Pages
- `about/index.html` — About page (placeholder portrait; add photo + profile links, see TODO in its `<head>`).
- `404.html` — shown by GitHub Pages for missing URLs; keep every link in it root-relative.
- Favicon set: `favicon.ico`, `images/favicon.svg`, `images/apple-touch-icon.png`,
  `images/icon-192.png`, `images/icon-512.png`, `site.webmanifest` (placeholder mark — swap when a logo exists).

## Files
- `index.html`
- `styles.css`
- `README.md`
- `AI_REPROMPT.md`
