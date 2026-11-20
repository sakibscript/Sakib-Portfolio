# Sakibul Alam — Software Engineer Portfolio

A responsive React + Vite portfolio for Sakibul Alam.

## Frontend

Requirements: Node.js and npm.

```powershell
cd frontend
npm install
npm run dev
```

Vite prints the local URL after startup (typically `http://localhost:5173/`). Build for production with `npm run build`.

## Navigation

Desktop uses a continuous vertical page layout. On phones (760 px and below), the document is locked to the viewport and the top hamburger menu switches between full-screen sections. Long sections can scroll inside their own panel when their content exceeds the available height; the browser page itself does not vertically scroll. There is no bottom navigation dock.

## Backend

The existing backend handles the contact/message endpoint. Review `backend/index.js` and `backend/db.js` before running it locally and configure environment variables as required. Do not commit `.env` files or credentials.

## Design notes

The portfolio uses a restrained navy-and-blue identity on neutral surfaces, an editorial hero, readable professional narrative, contribution-led experience entries, a responsive project grid, and user-triggered 180 ms interactions. The home overview presents experience, ERP business areas, and selected projects in a divider-separated metrics strip. The brand is text-only; no initial/letter logo is used.

The ZIP excludes `node_modules`; install frontend dependencies with `npm install` after extraction.
