How to apply this fix manually:

1) In your repository root (where package.json lives), create the folder: app
2) Inside /app, create two files:
   - layout.js  (paste the content from BLOKEP_app_layout.js)
   - page.js    (paste the content from BLOKEP_app_page.js)
3) Commit and redeploy to Vercel.

Notes:
- This is the minimal App Router structure required by Next.js 13.4.12.
- If your app is in a subfolder, set the 'Root Directory' in Vercel Project Settings accordingly.
