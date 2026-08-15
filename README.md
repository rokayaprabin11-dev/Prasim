# DIGIX Pixel-Perfect Landing Page

This project is a code recreation of the supplied DIGIX reference UI.

## Stack

Next.js 16 · React · TypeScript · Tailwind CSS · GSAP · Framer Motion · Lucide React · pnpm.

## Install

```bash
pnpm install
pnpm dev
```

## Images you provide

Put your own assets in `public/images/`:

```text
hero-main.jpg
hero-secondary.jpg

project-sampada.jpg
project-himalaya.jpg
project-travelo.jpg
project-journey.jpg

client-1.jpg
client-2.jpg
client-3.jpg
client-4.jpg
```

The implementation intentionally does NOT use the reference screenshot as the website background. It recreates the layout with HTML/CSS and uses your own images for the visual content.

## Important

"Pixel perfect" is only meaningful against a fixed viewport, exact fonts and exact image assets. The code is tuned to the supplied composition and responsive behavior, but the final image crop will depend on the images you put in `public/images/`.

For the closest match, compare at the same desktop viewport ratio as the supplied reference and then adjust the CSS variables/section dimensions by a few pixels if your exact assets have different aspect ratios.
