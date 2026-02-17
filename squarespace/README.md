# Efficiently — Squarespace Custom Pages

This folder contains ready-to-paste HTML/CSS code blocks for the Efficiently website on Squarespace.

---

## Files Overview

| File | Purpose | Where to Paste |
|------|---------|----------------|
| `global-styles.html` | Site-wide styles, design system, scroll animations | Code Injection > Header |
| `page-home.html` | Home / Landing page | Code Block on Home page |
| `page-thesis.html` | Investment & Advisory Thesis page | Code Block on Thesis page |
| `page-services.html` | Advisory & Investment engagement page | Code Block on Services page |
| `page-contact.html` | Contact form + newsletter signup | Code Block on Contact page |

---

## Setup Instructions

### Step 1: Add Global Styles (do this first)

1. In Squarespace, go to **Settings** > **Advanced** > **Code Injection**
2. Open the file `global-styles.html` in a text editor
3. Copy the **entire contents** of the file
4. Paste it into the **Header** section of Code Injection
5. Click **Save**

This installs the design system (colors, typography, cards, buttons, animations) across your entire site. All page code blocks depend on this.

### Step 2: Create the Pages

For each page (Home, Thesis, Services, Contact), follow these steps:

#### 2a. Create the Page in Squarespace

1. Go to **Pages** in the Squarespace sidebar
2. Click **+** to add a new page
3. Choose **Blank Page**
4. Name it appropriately:
   - **Home** (set as homepage)
   - **Thesis** (slug: `/thesis`)
   - **Services** (slug: `/services`)
   - **Contact** (slug: `/contact`)

#### 2b. Add the Code Block

1. Open the newly created page for editing
2. Click **Add Block** (or the **+** button in the editor)
3. Choose **Code** from the block options
4. Open the corresponding `page-*.html` file in a text editor
5. Copy the **entire contents** of the file
6. Paste it into the Code Block
7. **IMPORTANT:** Make sure **"Display Source"** is **UNCHECKED** (toggled OFF)
8. Click **Apply** / **Save**

#### 2c. Adjust Page Settings

1. Under the page's gear icon (settings), set the **URL Slug** as noted above
2. For the Home page: drag it to the top of your page list, then right-click > **Set as Homepage**

### Step 3: Update Navigation

1. Go to **Pages** in the sidebar
2. Drag your new pages into the **Main Navigation** section in the order you want:
   - Home
   - Thesis
   - Services
   - Contact
3. Remove or reorder any old pages

### Step 4: Customize Links (Important!)

Several placeholder links and values should be updated:

#### Contact Email
In `page-contact.html`, find all instances of `hello@efficiently.world` and replace with your actual email address.

#### LinkedIn URL
In `page-contact.html`, find `https://linkedin.com/company/efficiently` and replace with your actual LinkedIn company page URL.

#### Newsletter Form
In `page-contact.html`, the newsletter form's `action="#"` is a placeholder. You have two options:
- **Option A:** Replace the HTML form with a native Squarespace Newsletter Block (recommended — handles submissions automatically)
- **Option B:** Connect the form to a service like Mailchimp, ConvertKit, or Formspree by updating the `action` attribute

#### Contact Form
The contact form uses `mailto:` by default (opens the user's email client). For a better experience:
- **Option A:** Delete the HTML form and use a native Squarespace Form Block instead (recommended)
- **Option B:** Connect to Formspree.io or similar by changing the `action` to `https://formspree.io/f/YOUR_FORM_ID`

---

## Design System Reference

### Colors
- Background: `#0a0a0a` (primary), `#111111` (secondary), `#161616` (cards)
- Text: `#f0f0f0` (primary), `#a0a0a0` (secondary), `#666666` (muted)
- Accent: `#c8ff00` (electric lime-green)

### Key CSS Classes (all prefixed with `eff-`)
- `.eff-page` — wraps each page's content
- `.eff-section` — full-width section with padding
- `.eff-container` / `.eff-container--narrow` — max-width wrappers
- `.eff-h1` through `.eff-h4` — responsive headings
- `.eff-body` / `.eff-body-lg` — body text
- `.eff-label` — uppercase accent label
- `.eff-card` — dark bordered card with hover effect
- `.eff-btn--primary` / `.eff-btn--outline` / `.eff-btn--ghost` — button styles
- `.eff-pill` — tag/badge pill
- `.eff-list` — styled bullet list
- `.eff-outcome` — highlighted outcome callout
- `.eff-fade-up` — scroll-reveal animation (auto-triggers on scroll)
- `.eff-grid-2` / `.eff-grid-3` — responsive grid layouts

### Responsive Behavior
- Grids collapse to single column below 768px
- Font sizes scale with `clamp()` for fluid typography
- Buttons go full-width below 480px

---

## Troubleshooting

**Styles not showing up?**
- Make sure `global-styles.html` is pasted into Code Injection > **Header** (not Footer)
- Check that the page code block has "Display Source" **unchecked**

**Animations not working?**
- The scroll animations require the global `<script>` from `global-styles.html`
- Squarespace's AJAX page loading is supported via the `mercury:load` event listener

**Layout looks broken on mobile?**
- The CSS includes responsive breakpoints at 768px and 480px
- If Squarespace adds conflicting padding, add this to Code Injection > Header:
  ```html
  <style>.page-section .content-wrapper { padding: 0 !important; }</style>
  ```

**Forms not submitting?**
- The HTML forms are placeholders — replace them with Squarespace Form Blocks for built-in functionality, or connect to Formspree/Mailchimp

---

## Accent Color

The accent color `#c8ff00` (electric lime-green on dark) is defined in the CSS variable `--eff-accent`. To change it site-wide, update this single variable in `global-styles.html`:

```css
--eff-accent: #YOUR_NEW_COLOR;
--eff-accent-dim: rgba(YOUR_R, YOUR_G, YOUR_B, 0.15);
--eff-accent-glow: rgba(YOUR_R, YOUR_G, YOUR_B, 0.08);
```
