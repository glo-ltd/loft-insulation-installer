# Deploying Loft Insulation Installer

This site is a **Vite + React** app. Unlike WordPress, you don't upload files to a
server. Instead:

1. Your code lives in **GitHub** (the master copy).
2. **Netlify** watches GitHub and automatically *builds* and *publishes* the site
   every time you change the code.

You only have to set this up once. After that, any change you push to GitHub goes
live in about a minute.

---

## Step 1 — Put the code on GitHub

You have the project as a folder on your computer (from the `.zip` you downloaded).

**Easiest way (GitHub Desktop app):**

1. Install GitHub Desktop: https://desktop.github.com
2. Open it and sign in with your new GitHub account.
3. `File → Add Local Repository…` and pick the unzipped project folder.
   (If it says "this isn't a git repository", click **Create a repository** instead.)
4. Give it a name, e.g. `loft-insulation-installer`. Click **Create Repository**.
5. Click **Publish repository** (top right). Leave "Keep this code private" ticked
   if you want it private. Click **Publish**.

Your code is now on GitHub. 🎉

---

## Step 2 — Connect Netlify to GitHub

1. Log in to https://app.netlify.com
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and authorise Netlify (a popup asks permission — accept it).
4. Pick your `loft-insulation-installer` repository.
5. Netlify reads the included `netlify.toml` file, so the build settings fill in
   automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   Leave them as-is.
6. **Before clicking Deploy**, open **Add environment variables** (or
   "Show advanced") and add ONE variable:
   - **Key:** `VITE_ZAPIER_WEBHOOK_URL`
   - **Value:** `https://hooks.zapier.com/hooks/catch/25494995/433wva2/`
   This is what connects the contact form to Zapier → HubSpot. (We keep it out of
   the code so it isn't public.)
7. Click **Deploy**.

Netlify will build the site (takes ~1 minute) and give you a temporary address like
`random-name-123.netlify.app`. That's your live site.

---

## Step 3 — Point your domain at it (when ready)

In Netlify: **Domain settings → Add a domain**. Netlify walks you through pointing
your domain's DNS to it. (This replaces the Siteground hosting step you're used to.)

---

## Making changes later

- Edit files on your computer → in GitHub Desktop, type a short summary, click
  **Commit to main**, then **Push origin**.
- Netlify automatically rebuilds and republishes within a minute.

You never touch a server directly. GitHub is the source; Netlify does the publishing.

---

## Running the site on your own computer first (optional)

If you want to preview locally before pushing:

1. Install Node.js (LTS version): https://nodejs.org
2. Open a terminal in the project folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (usually http://localhost:5173).

For the form to work locally, create a file named `.env.local` in the project
folder containing:
```
VITE_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/25494995/433wva2/
```

---

## The contact form → HubSpot

When someone submits the form, the site sends this data to your Zapier webhook:

| Field sent            | Example                          |
|-----------------------|----------------------------------|
| `firstName`           | Jane                             |
| `lastName`            | Smith                            |
| `email`               | jane@example.com                 |
| `phone`               | 07700 900123                     |
| `postcode`            | M1 4WP                           |
| `serviceInterest`     | Sheep Wool: natural, pre-1920…   |
| `message`             | (their optional message)         |
| `estimatedMonthlyBill`| 120                              |
| `estimatedYearlySaving`| 360                             |

In Zapier, map these to your HubSpot contact properties, then turn the Zap on.
To make Zapier "see" these fields, submit the live form once, then click
**Test trigger** on the webhook step in Zapier.
