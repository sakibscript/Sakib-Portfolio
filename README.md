# Sakib Portfolio

Updated source for the React/Vite portfolio and its message API backend.

## Frontend

Requirements: Node.js and npm.

```powershell
cd frontend
npm install
npm run dev
```

Vite prints the local URL after startup (typically `http://localhost:5173/`).

To create a production build:

```powershell
npm run build
```

## Backend (optional for local UI preview)

The frontend can be viewed independently. The existing backend handles the contact/message endpoint and uses environment configuration; review `backend/index.js` and `backend/db.js` before running it locally.

```powershell
cd backend
npm install
npm start
```

Do not commit local `.env` files or database credentials.

## Main updates

- Unified blue/slate palette matching the selected mockup: primary blue `#3882F6`, hover blue `#2563EB`, cyan accent `#06B6D4`, background `#F8FAFC`, white cards, navy text `#0F172A`, muted text `#64748B`, and borders `#E2E8F0`.
- More usable mobile Experience cards and better wrapping for long company names, dates and technology tags.
- Resume section tabs adapt to phone widths.
- GPAC ERP/SaaS project with a matching dashboard illustration and live site link.
- Profile cut-out image with a soft pale-blue organic backdrop, styled to match the selected reference.
- Matching blue/slate accent colors for navigation, buttons, icons, tags, timeline, cards, and light/dark mode.
- Responsive project grid, project filters, and reduced motion for accessibility.
