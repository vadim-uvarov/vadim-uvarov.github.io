# Personal Website — Vadim Uvarov

A clean, light-theme, minimalist single-page personal site built from your CV, deployable to GitHub Pages.

## Design direction

- Light theme: white/off-white background, dark slate text, single subtle accent (muted blue or slate-teal).
- Modern professional minimalist: generous whitespace, restrained typography (Inter or similar sans-serif), no gradients, no neon, no "hacker" terminal vibes.
- Fully responsive, single page with smooth-scroll anchor navigation.

## Page structure (single page)

1. **Hero / About**
   - Your photo (extracted from CV, circular crop)
   - Name, title: "ML Engineer & Data Scientist · PhD in Machine Learning"
   - Freelance availability banner: "Freelance ML engineer — open to selected projects in Belgium (hybrid) or worldwide (fully remote)"
   - Primary buttons: Download CV · LinkedIn · Email
   - Short intro paragraph from CV

2. **Skills**
   - Grouped cards: Machine Learning, Deep Learning, Cloud & MLOps, Python, Big Data, Software Engineering, Data Viz, Statistics, Algorithms, Research
   - Compact tag/pill list under each group

3. **Experience**
   - Timeline of: Centrica, Sentiance, Tele2, Magnit
   - Role, company, location, dates, key bullets

4. **Education**
   - PhD and MSc at Novosibirsk State Technical University

5. **Projects & Publications**
   - **Live demos** section (placeholder area, easy to extend) with the AWS demo card linking to https://d34zk8rzmbn1ay.cloudfront.net/
   - Research paper (BNAIC 2022), Medium article, Map Matching talk + paper, PhD thesis + defense video, street-signs CV pet project
   - Each as a card with title, short description, external link

6. **Languages & Hobbies** (compact)

7. **Contact**
   - Email displayed in full plain text: `uvarov.vadim42@gmail.com` (also clickable mailto)
   - Phone: +32-489-37-43-99
   - Telegram: @v_uvarov
   - LinkedIn: https://www.linkedin.com/in/vadim-uvarov/
   - ResearchGate link

## Assets

- Copy your photo from the parsed CV (`page_1_image_1_v2.jpg`) to `src/assets/vadim.jpg`.
- Copy the CV PDF to `public/CV_Vadim_Uvarov_2025.pdf` so it's served as a static download via a "Download CV" button.

## GitHub Pages deployment

Vite + React works on GitHub Pages with these adjustments:

- Add `base: './'` (relative paths) in `vite.config.ts` so assets resolve under `https://<user>.github.io/<repo>/`.
- Add `public/404.html` that redirects to `index.html` so the SPA router works on refresh / deep links (standard GH Pages SPA trick), plus a small inline script in `index.html` to restore the original path.
- Add a GitHub Actions workflow `.github/workflows/deploy.yml` that runs on push to `main`: `npm ci` → `npm run build` → upload `dist/` → deploy to GitHub Pages using `actions/deploy-pages`.
- Include a short README section explaining: enable Pages → "GitHub Actions" source, push to main, done. Mention that for a custom domain or user/organization site (`<user>.github.io`) `base` can be `'/'` instead.

## Technical details

- Stack: existing React 18 + Vite + Tailwind + shadcn/ui (already in project).
- Replace `src/pages/Index.tsx` with the new sections; extract small components per section under `src/components/site/` (Hero, Skills, Experience, Education, Projects, Contact, Nav, Footer).
- Update `src/index.css` design tokens for the light theme accent and typography; add Inter via Google Fonts link in `index.html`.
- Update `index.html` `<title>` and meta description for SEO ("Vadim Uvarov — Freelance ML Engineer & Data Scientist"), single H1 in Hero, semantic `<section>` per area, alt text on photo, JSON-LD `Person` schema.
- No backend, no auth, no database — pure static site, ideal for GH Pages.

## Out of scope

- No blog/CMS, no contact form (would need a backend); contact is via the listed email/LinkedIn/Telegram.
- No dark-mode toggle (light only, per your preference).
