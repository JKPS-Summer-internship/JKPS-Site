# JKPS Solutions – Website

Static website for JKPS Solutions. No build step required.

## Structure

```
├── index.html          # Home
├── services.html       # Services
├── about.html          # About us
├── portfolio.html      # Work / Case studies
├── blog.html           # Blog
├── contact.html        # Contact
├── careers.html        # Careers & internship
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── logo.png
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project** → **Connect to Git**
4. Select your repository
5. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
6. Click **Save and Deploy**

That's it. Cloudflare will serve the static files directly.

## Fonts

Uses Google Fonts (DM Sans + Sora) loaded via CDN. No install needed.

## Adding real logo

The logo is in `assets/logo.png`. Replace with any updated version — same filename, same path.
