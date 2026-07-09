# Your Name — Portfolio Site

A clean, minimal portfolio for showing your paintings, prints, commissions,
and outside credits (judging, contest design, etc). Plain HTML/CSS/JS —
no build step, no framework.

## Files

- `index.html` — all page content
- `styles.css` — all styling (colors/fonts are defined once at the top as CSS variables)
- `script.js` — mobile menu, gallery filter buttons, footer year
- `CNAME` — your custom domain, for GitHub Pages (edit this!)

## 1. Customize the content

Open `index.html` and replace anything that says "Your Name", "Title of
Piece", "Restaurant Name", `you@example.com`, and the social links near the
bottom, with your real info.

**Replacing the placeholder artwork blocks:**
Right now, artworks and the hero strip use colored gradient blocks
(`.swatch-1` through `.swatch-6`, defined in `styles.css`) as stand-ins for
real photos. To use real images instead:

1. Add your image files to a new `images/` folder (e.g. `images/piece-1.jpg`).
2. In `index.html`, replace a line like:
   ```html
   <div class="artwork-frame swatch-1"></div>
   ```
   with:
   ```html
   <img class="artwork-frame" src="images/piece-1.jpg" alt="Title of Piece I">
   ```
3. Do the same for `.about-portrait` and the hero strip swatches if you want
   real photos there too.

**Colors and fonts** live at the top of `styles.css` under `:root` — change
the hex values there and they update everywhere.

**Adding/removing artwork:** copy one `<article class="artwork">...</article>`
block and edit it. Set `data-status` to `available`, `sold`, or `nfs` so the
filter buttons work correctly.

## 2. Put it on GitHub Pages

1. Create a new repository on GitHub (public).
2. Upload these files to the repo (root of the repo, not in a subfolder) —
   either drag-and-drop in the GitHub web UI, or:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL like `https://yourusername.github.io/your-repo/`.
   Give it a minute or two to build.

## 3. Point your Namecheap domain at it (no redirect — real hosting)

This makes `yourdomain.com` itself load the site directly.

**A. Edit the CNAME file in your repo:**
Change the contents of the `CNAME` file (already included in this project)
from `yourdomain.com` to your actual domain, e.g. `artbyyourname.com`.
Commit and push that change.

**B. In Namecheap, set your DNS records:**
Log into Namecheap → Domain List → click **Manage** next to your domain →
**Advanced DNS** tab. Add these records (delete any conflicting default
"Parking Page" redirect records first):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | yourusername.github.io. | Automatic |

(Replace `yourusername` with your actual GitHub username. Keep the trailing
dot if Namecheap's UI shows one on other CNAME entries — it's usually added
automatically.)

**C. Back in GitHub:**
Repo → **Settings → Pages** → under "Custom domain", enter your domain
(e.g. `artbyyourname.com`) and save. Once GitHub verifies the DNS (can take
a few minutes to a day), tick **Enforce HTTPS**.

**D. Wait for DNS to propagate.**
Usually minutes, sometimes up to 24 hours. You can check propagation with
a tool like `whatsmydns.net`, searching your domain's A records.

Once this is done, visiting `yourdomain.com` loads your site directly —
there's no redirect step and no visible `github.io` address.

### If you want `www.yourdomain.com` to work too
The CNAME record above already handles that. If you want `www` to be the
primary version instead of the bare domain, you'd set that as the custom
domain in GitHub Pages settings instead — either works, GitHub redirects
one to the other automatically.
