# Protfolio-YoussefAtefMarouf - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, React 19, and TypeScript. Features a beautiful UI with dark mode support, multilingual support (English/Arabic), and smooth animations.

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean and professional design with smooth animations
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 🌍 **Multilingual Support** - Full English/Arabic translation with RTL support
- 📱 **Fully Responsive** - Works seamlessly on all devices (desktop, tablet, mobile)
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal performance
- 🎯 **SEO Optimized** - Server-side rendering and optimized meta tags
- 🎭 **Smooth Animations** - AOS (Animate On Scroll) library integration
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔐 **NextAuth Integration** - Ready for authentication (if needed)
- 📦 **TypeScript** - Type-safe development experience

## 🚀 Tech Stack

### Core Technologies
- **Next.js** 15.1.1 - React framework for production
- **React** 19.0.0 - UI library
- **TypeScript** 5.x - Type-safe JavaScript
- **Tailwind CSS** 4.0.0 - Utility-first CSS framework

### Key Libraries
- **@iconify/react** - Icon library with 100,000+ icons
- **AOS** - Animate On Scroll library
- **react-slick** - Carousel/slider component
- **next-themes** - Dark mode support
- **next-auth** - Authentication (optional)
- **react-hot-toast** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🛠️ Installation

### 1. Clone the Repository


### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
venus-nextjs/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── context/            # React contexts (Language, Auth)
│   │   ├── api/                 # API routes and data
│   │   └── globals.css          # Global styles
│   ├── components/              # React components
│   │   ├── Home/                # Home page components
│   │   ├── Layout/              # Layout components (Header, Footer)
│   │   ├── SharedComponent/     # Shared components
│   │   └── Common/              # Common utilities
│   └── utils/                   # Utility functions
├── public/                      # Static assets
│   ├── images/                  # Image files
│   └── fonts/                   # Font files
├── package.json                 # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Language Support

The website supports two languages:
- **English (EN)** - Default language
- **Arabic (AR)** - Full RTL support with Arabic fonts

Language switching is handled through the `LanguageContext` which updates:
- All text content
- HTML `dir` attribute (LTR/RTL)
- HTML `lang` attribute
- Font family (Arabic/English fonts)

## 🎨 Customization

### Adding New Translations

Edit `src/app/context/LanguageContext.tsx` to add new translation keys:

```typescript
const translations = {
  'Your Key': { 
    en: 'English Text', 
    ar: 'النص العربي' 
  },
}
```

### Changing Colors

Modify Tailwind CSS configuration in `tailwind.config.js` or update CSS variables in `globals.css`.

### Adding New Sections

1. Create component in `src/components/Home/`
2. Add to `src/app/page.tsx`
3. Update navigation in `src/components/Layout/Header/Navigation/menuData.tsx`

## 📱 Sections

- **Hero** - Introduction and main CTA
- **About** - Personal information and skills progress
- **Services** - Services offered
- **Skills** - Technical skills showcase
- **Portfolio** - Project showcase with carousel
- **Contact** - Contact information in footer

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed on:
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean**
- Any platform supporting Node.js

## 📄 License

- Design and Code is Copyright © [GetNextJsTemplates](https://getnextjstemplates.com/)
- Licensed under [MIT License](LICENSE)
- Distributed by [ThemeWagon](https://themewagon.com)

## 👨‍💻 Author

**Youssef Atef**
- Portfolio: Personal Portfolio Website
- Email: youssefmarouf289@gmail.com
- Phone: +20 120 843 0849

## 🙏 Acknowledgments

- Original template by [GetNextJsTemplates](https://getnextjstemplates.com/)
- Icons by [Iconify](https://iconify.design/)
- Fonts: Josefin Sans, Jost, CoconNextArabic

## 📞 Support

For support, email youssefmarouf289@gmail.com or contact through the website.

---

Made with ❤️ using Next.js and React
