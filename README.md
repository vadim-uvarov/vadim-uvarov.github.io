# Vadim Uvarov — Personal Website

Personal site built with React + Vite + Tailwind. Designed to deploy to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Deploy to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml` that builds the site and publishes it to GitHub Pages on every push to `main`.

One-time setup:

1. Push the repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The site will be available at
   `https://<your-username>.github.io/<repo-name>/`.

### Notes

- `vite.config.ts` uses `base: "./"` so the build works both at `https://<user>.github.io/<repo>/`
  and on a custom / root domain — no changes needed.
- `public/404.html` provides the standard SPA fallback so deep links and refreshes work on GitHub
  Pages.
- The CV is served as a static file from `public/CV_Vadim_Uvarov_2025.pdf`.
