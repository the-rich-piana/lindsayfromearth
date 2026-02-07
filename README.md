# Mia Lindsay | Health & Wellness Website

A beautiful, responsive one-page website for Mia Lindsay's health & wellness, yoga instruction, and massage therapy business. Built with modern web technologies and designed with warm, earthy tones to reflect a holistic approach to wellbeing.

## Overview

This website showcases Mia Lindsay's services in:
- **Yoga Instruction** - Hatha, Vinyasa, and Restorative yoga for all levels
- **Massage Therapy** - Therapeutic, deep tissue, and Swedish massage
- **Wellness Coaching** - Holistic health guidance and lifestyle support

## Tech Stack

- **TypeScript** - Type-safe JavaScript for robust code
- **Vite** - Lightning-fast development server and build tool
- **Bulma CSS** - Clean, modern flexbox-based CSS framework
- **SCSS** - Enhanced CSS with variables and mixins
- **Font Awesome** - Icon library for visual elements
- **Google Fonts** - Lora (serif) and Open Sans (sans-serif) typography

## Design Principles

### Color Palette
The site uses warm, gentle, earthy tones:
- **Sage Green** (#9caf88) - Primary color
- **Soft Terracotta** (#e8b4a0) - Accent color
- **Warm Cream** (#f5f1e8) - Background
- **Deep Earth** (#5a4a42) - Text color

### Typography
- **Headings**: Lora (serif) at 400-500 weight
- **Body**: Open Sans (sans-serif) at 300 weight

### Layout Features
- Generous white space for breathing room
- Soft shadows and rounded corners (12px radius)
- Gentle hover effects and transitions
- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation

## Project Structure

```
lindsayfromearth/
├── src/
│   ├── index.html           # Main HTML file
│   ├── styles/
│   │   ├── main.scss        # Main SCSS (imports Bulma + custom)
│   │   └── _custom.scss     # Theme variables and overrides
│   ├── scripts/
│   │   └── main.ts          # TypeScript for interactivity
│   └── assets/
│       └── images/          # Image assets (for future use)
├── dist/                    # Build output (generated, gitignored)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── Makefile                 # Command shortcuts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/the-rich-piana/lindsayfromearth.git
cd lindsayfromearth
```

2. Install dependencies:
```bash
make install
# or
npm install
```

### Development

Start the development server:
```bash
make dev
# or
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
make build
# or
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
make preview
# or
npm run preview
```

### Other Commands

```bash
make clean    # Remove node_modules/ and dist/
make deploy   # Build and deploy to GitHub Pages
make help     # Show all available commands
```

## Features

### Smooth Scrolling Navigation
- Click any navigation link to smoothly scroll to the corresponding section
- Automatically accounts for fixed navbar height
- Mobile menu closes automatically after navigation

### Mobile Menu
- Responsive hamburger menu for mobile devices
- Toggles navigation on smaller screens
- Smooth animations and transitions

### Intersection Observer Animation
- Sections fade in as they come into view
- Enhances user experience with subtle animations

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability

## Deployment

### GitHub Pages

This site is ready to deploy to GitHub Pages:

**Option 1: Manual Deploy**
```bash
make deploy
```

**Option 2: GitHub Actions (Automated)**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Enable GitHub Pages:**
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / root
4. Save

Site will be live at: `https://the-rich-piana.github.io/lindsayfromearth/`

### Custom Domain

To use a custom domain:
1. Update `vite.config.ts` and change `base: '/'`
2. Add a `CNAME` file to `src/` with your domain
3. Configure DNS settings with your domain provider

## Customization

### Colors
Edit `src/styles/_custom.scss` to change the color palette:
```scss
$sage-green: #9caf88;
$soft-terracotta: #e8b4a0;
$warm-cream: #f5f1e8;
$deep-earth: #5a4a42;
```

### Typography
Change fonts in `src/styles/_custom.scss`:
```scss
$family-primary: 'Open Sans', sans-serif;
$family-secondary: 'Lora', serif;
```

### Content
Edit `src/index.html` to update:
- Hero tagline and message
- About section bio
- Services descriptions
- Contact information
- Footer details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features to add:
- Contact form with backend integration (EmailJS/Formspree)
- Image gallery for yoga classes and workspace
- Blog section for wellness tips
- Online booking system
- Client testimonials
- Animation library (AOS) for enhanced effects
- SEO optimization with meta tags
- Google Analytics integration

## License

MIT License - feel free to use this template for your own projects

## Contact

For questions or support, reach out to Mia Lindsay at mia@lindsayfromearth.com

---

Built with care using TypeScript, Vite, and Bulma 🌿
