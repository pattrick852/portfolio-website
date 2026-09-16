# Modern Portfolio Website

A beautiful, minimalist portfolio website inspired by huyml.co design. Built with Next.js, TypeScript, and Framer Motion.

## Features

- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Modern, minimalist aesthetic
- 💪 Built with Next.js 14
- 🎨 Beautiful UI with CSS modules
- ⚡ Optimized performance
- 🔍 SEO friendly

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pattrick852/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── styles/                 # CSS modules
│   ├── Navigation.module.css
│   ├── Hero.module.css
│   ├── Projects.module.css
│   ├── About.module.css
│   ├── Contact.module.css
│   └── Footer.module.css
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customization

### Update Portfolio Content

Edit the component files to customize:
- Hero section: `components/Hero.tsx`
- Projects: `components/Projects.tsx`
- About section: `components/About.tsx`
- Contact form: `components/Contact.tsx`

### Customize Colors

Colors are defined in CSS modules. Edit the `.module.css` files to change the color scheme.

### Add Your Projects

Edit the `projects` array in `components/Projects.tsx` to add your own projects.

## Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or deploy to any hosting platform that supports Node.js.

## Performance

- Image optimization with Next.js Image component
- CSS-in-JS with CSS Modules
- Smooth animations with Framer Motion
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created with ❤️ for your portfolio

## Support

If you have any questions or need help, feel free to open an issue on GitHub.
