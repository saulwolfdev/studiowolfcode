# StudioWolfCode portfolio

Portfolio for Saúl Alejos Garay, built with Next.js, React, TypeScript, GSAP and Tailwind-ready styling. The first release uses local content and keeps Firebase isolated behind repositories for a future integration.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production build used by Netlify.
- `npm run start` runs a completed production build locally.
- `npm run typecheck` validates TypeScript without emitting files.

## Deploying to Netlify

Netlify is the official deployment target for this repository. Connect the Git repository in Netlify and use the settings committed in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: `22`

Netlify detects Next.js and deploys it through its OpenNext adapter, so App Router, server rendering, route handlers and image optimization remain available. Do not enable static export unless the application is intentionally converted to a static-only site.

Every push to the production branch can trigger a production deploy. Pull requests and other configured branches can use Deploy Previews.

### Environment variables

The current site works without Firebase. If Firebase is enabled later, copy `.env.example` to `.env.local` for development and add the same values in **Netlify → Project configuration → Environment variables**. Never commit `.env.local` or credentials.

The contact form currently displays an honest notice and does not submit data. Before enabling submissions, add a protected server endpoint with validation, anti-spam controls and rate limiting.

## Architecture

- `src/app` contains the App Router entry points and global metadata.
- `src/components` contains the presentation layer.
- `src/repositories` isolates local and future Firebase data access.
- `src/lib/firebase` contains optional Firebase initialization.
- `src/types` contains shared data models.

Presentation components should not import Firebase directly. Pages obtain data from repository functions and pass typed props to the UI.

