# Nuclon SaaS Dashboard

A modern, responsive SaaS dashboard built with **Next.js 15**, **TypeScript**, and **React**. Features a professional design with a sidebar navigation, header with action buttons, statistics cards, chart placeholders, and an activity table.

## Features

- **Responsive Design**: Mobile-first layout that adapts to all screen sizes
- **Modern Dashboard UI**: Professional appearance with cards, stats, and tables
- **Next.js 15 App Router**: Built with the latest Next.js features
- **TypeScript**: Fully typed codebase for better development experience
- **CSS Modules**: Scoped styling to prevent style conflicts
- **React Components**: Reusable, modular component structure
- **Lucide Icons**: Beautiful SVG icons throughout the interface

## Project Structure

```
nuclon-saas-dashboard/
├── app/
│   ├── layout.tsx       # Root layout with global styles
│   ├── page.tsx         # Home page
│   └── favicon.ico
├── components/
│   ├── dashboard.tsx    # Main dashboard component
│   └── dashboard.module.css  # Dashboard styles
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── .eslintrc.json       # ESLint configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/infinity7771/Nuclon1.git
cd Nuclon1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm start`** - Start the production server
- **`npm run lint`** - Run ESLint to check code quality

## Customization

### Colors & Design Tokens

Global color variables are defined in `app/layout.tsx` within the `<style>` tag:

```css
--background: #ffffff
--foreground: #1a1a1a
--primary: #1f2937
--secondary: #f3f4f6
--muted: #f3f4f6
--border: #e5e7eb
```

Update these values to change the dashboard's color scheme.

### Dashboard Content

Edit `components/dashboard.tsx` to:
- Modify the logo and branding
- Add/remove navigation items
- Update statistics and chart data
- Customize the activity table

### Styling

Styles are organized using CSS Modules in `components/dashboard.module.css`. Each component has its own scoped styles to prevent conflicts.

## Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Lucide React](https://lucide.dev/)** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the GitHub repository.
