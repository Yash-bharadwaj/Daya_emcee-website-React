# Michelle DJ Website

A modern, responsive single-page website for Michelle DJ built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** - Eye-catching introduction with call-to-action
- **Portfolio** - Showcase of recent events and performances
- **Services** - What Michelle DJ offers
- **Stats** - Performance metrics and achievements
- **Testimonials** - Client feedback and reviews
- **Contact** - Easy ways to get in touch
- **Dark/Light Theme** - Toggle between themes
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Enhanced user experience

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd michelle-dj-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── sections/     # Main page sections
│   ├── ui/          # Reusable UI components
│   └── aceternity/  # Advanced UI components
├── contexts/        # React contexts
├── hooks/          # Custom hooks
├── lib/            # Utility functions
└── data/           # Static content
```

## Content Management

The website content is managed through JSON files located in the `public/data/` directory. Update `content.json` to modify:

- Hero section text and links
- Services and pricing
- Portfolio items
- Testimonials
- Contact information
- Social media links

## Customization

### Colors and Styling
- Modify `tailwind.config.js` for theme customization
- Update gradient colors in components for brand consistency

### Content
- Update images in `public/` directory
- Modify text content in `public/data/content.json`
- Customize social media links

## Deployment

The website can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

## License

© 2024 Michelle DJ. All rights reserved. 