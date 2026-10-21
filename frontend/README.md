# Sakib Portfolio — Frontend

React 19, Vite, Tailwind CSS and JavaScript.

## Run locally

Install Node.js (LTS recommended), then open a terminal in this folder:

```powershell
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173/`). Keep the terminal running while previewing the site.

## Build for production

```powershell
npm run build
npm run preview
```

## Theme

The UI uses the selected blue/slate theme: `#3882F6` primary, `#2563EB` hover, `#06B6D4` accent, `#F8FAFC` page background, white cards, `#0F172A` primary text and `#64748B` secondary text. The hero portrait uses a pale-blue cut-out backdrop.

## Notes

- The project archive intentionally excludes `node_modules`; install dependencies with `npm install` after extracting.
- The contact form calls the portfolio's configured backend endpoint. The rest of the portfolio UI can be previewed without the backend.
