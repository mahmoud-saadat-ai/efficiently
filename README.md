# Efficiently

**Investing & Advising for the Physical AI Future**

Live site: [mahmoud-saadat-ai.github.io/efficiently](https://mahmoud-saadat-ai.github.io/efficiently/)

---

## About

Efficiently backs and advises companies building real-world AI systems — robotics, autonomous systems, industrial automation, automotive, defense, energy, and infrastructure — and helps them do it efficiently.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, core belief, Physical AI domains, differentiator |
| Thesis | `thesis.html` | Three-pillar investment thesis and comparison |
| Services | `services.html` | Advisory & investment engagement details |
| Contact | `contact.html` | Contact form, direct info, newsletter signup |

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **GitHub Pages** for hosting
- **Inter** (Google Fonts) for typography
- Responsive design with mobile-first breakpoints
- Scroll-reveal animations via Intersection Observer

## Project Structure

```
efficiently/
  index.html              Home page
  thesis.html             Thesis page
  services.html           Services page
  contact.html            Contact page
  css/
    styles.css            Shared design system & all styles
  js/
    main.js               Scroll animations, nav, form handler
  squarespace/            Legacy Squarespace code blocks (archived)
```

## Local Development

Open `index.html` directly in a browser, or use any local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--eff-bg-primary` | `#0a0a0a` | Page background |
| `--eff-bg-secondary` | `#111111` | Alternating sections |
| `--eff-bg-card` | `#161616` | Card backgrounds |
| `--eff-accent` | `#c8ff00` | Primary accent (lime-green) |
| `--eff-text-primary` | `#f0f0f0` | Headings & body text |
| `--eff-text-secondary` | `#a0a0a0` | Supporting text |

### Changing the Accent Color

Update these three variables in `css/styles.css`:

```css
--eff-accent: #YOUR_COLOR;
--eff-accent-dim: rgba(R, G, B, 0.15);
--eff-accent-glow: rgba(R, G, B, 0.08);
```

### Responsive Breakpoints
- **768px** — Grids collapse to single column, mobile nav activates
- **480px** — Buttons go full-width, tighter section padding

## Customization Checklist

Before going live with a custom domain, update these placeholders:

- [ ] Email address: replace `hello@efficiently.world` in `contact.html`
- [ ] LinkedIn URL: replace `linkedin.com/company/efficiently` in `contact.html` and footer
- [ ] Contact form: connect to [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or your preferred backend
- [ ] Newsletter form: connect to Mailchimp, ConvertKit, or similar
- [ ] Open Graph image: add `og:image` meta tags with a branded preview image
- [ ] Custom domain: configure in GitHub repo Settings > Pages > Custom domain

## Custom Domain Setup

To use `efficiently.world` instead of the GitHub Pages URL:

1. Go to **GitHub repo** > **Settings** > **Pages** > **Custom domain**
2. Enter `efficiently.world` and save
3. At your domain registrar (e.g., Google Domains / Squarespace), add these DNS records:
   - **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record** for `www` pointing to `mahmoud-saadat-ai.github.io`
4. Wait for DNS propagation (up to 24 hours) and enable **Enforce HTTPS** in GitHub Pages settings

Your G-Suite email (MX records) will continue working — website hosting uses A/CNAME records which don't conflict.

## License

All rights reserved. &copy; 2026 Efficiently.
