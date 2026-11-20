# Sakibul Alam — Software Engineer Portfolio

React + Vite portfolio for Sakibul Alam.

## Run locally

```powershell
npm install
npm run dev
```

Vite prints the local development URL (normally `http://localhost:5173/`).

## Build

```powershell
npm run build
```

## Navigation

Desktop uses a continuous vertical page layout. On phones (760 px and below), the document is locked to the viewport and the top hamburger menu switches between full-screen sections. Long sections can scroll inside their own panel when content exceeds the available height; the browser page itself does not vertically scroll. There is no bottom navigation dock.

## Design direction

- Editorial software-engineering portfolio with a clear role statement and work-first hierarchy.
- Neutral surfaces with a restrained navy-blue accent.
- Contribution-led experience descriptions and project context.
- Text-only nameplate; no lettermark/avatar icon in the brand.
- Responsive project grid that presents all projects in the regular page flow.
- Clear home metrics for 2+ years of experience, ERP business areas, and selected projects and research.
- Light and dark themes, with transitions only on user interaction.

The contact form continues to use the existing message API endpoint. The ZIP does not include `node_modules`; run `npm install` after extraction.
