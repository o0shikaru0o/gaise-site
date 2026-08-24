# Gaise share viewer + marketing site

Next.js 14 App Router app that serves:

- `/` — marketing landing page
- `/privacy` — privacy policy
- `/disclosure` — FTC affiliate disclosure
- `/c/[token]` — public share viewer for collections created in the Gaise Chrome extension

Deployed on Vercel. Reads public collections from Supabase using the same
publishable key baked into the extension; RLS enforces the "only public
collections" rule server-side.

## Local development

```bash
cd share-viewer
npm install
npm run dev
```

Open http://localhost:3000. Share pages render at `/c/<share_token>` — get a
token by publishing a collection in the extension (Collections → open one →
toggle "Share as public link" → the token is the last path segment of the URL).

## Deploy to Vercel

1. Push this folder to a new GitHub repo (name it `gaise-site` or similar).
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: leave as `.` (the repo IS the app).
5. No env vars to set — the Supabase publishable key is checked into the code
   (it's the same public key the extension ships with; safe to commit).
6. Click **Deploy**.

Vercel gives you a URL like `gaise-site.vercel.app`. If you own a domain you
can attach it later in Vercel's Domains settings.

## After first deploy

The extension's `SHARE_VIEWER_URL` (in `popup.js`) is hardcoded to
`https://gaise.vercel.app`. If Vercel gave you a different URL, tell the
extension author to swap the constant, or add a custom domain in Vercel that
matches `gaise.vercel.app`.

## Updating the site

Push to the connected GitHub repo → Vercel auto-deploys.

To change what a share page looks like, edit `app/c/[token]/page.js`.
To change the landing page, edit `app/page.js`.
