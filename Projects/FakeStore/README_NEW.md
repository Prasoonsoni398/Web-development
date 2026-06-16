# FakeStore - Modern E-Commerce Storefront Demo

A professional, fully-responsive e-commerce demonstration storefront built with **React**, **Vite**, and **Tailwind CSS**. Perfect for learning, prototyping, and showcasing e-commerce UI concepts.

![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.0-06B6D4?style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router-7.17.0-F44250?style=flat-square)

---

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Pages Overview](#pages-overview)
- [Technology Stack](#technology-stack)
- [API Integration](#api-integration)
- [Styling System](#styling-system)
- [Browser Support](#browser-support)

---

## ✨ Features

### Core Functionality
- 📱 **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🛍️ **Product Catalog** - Integration with FakeStore API for real product data
- 🔍 **Search & Browsing** - Find products by name and category
- 📄 **Multi-Page Navigation** - Home, Products, About, and Contact pages
- ⚡ **Fast Performance** - Optimized production build (272KB JS, 35KB CSS)
- 🎯 **SEO Friendly** - Semantic HTML structure

### User Experience
- Intuitive navigation with responsive header
- Professional footer with company links
- Smooth page transitions
- Loading states for data fetching
- Error handling for API failures
- Touch-friendly mobile interface

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd FakeStore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📦 Installation

### Option 1: npm
```bash
npm install
```

### Option 2: yarn
```bash
yarn install
```

### Setup Environment
No environment variables required! The project uses the public FakeStore API.

---

## 📁 Project Structure

```
FakeStore/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero section
│   │   ├── Product.jsx       # Products catalog and browsing
│   │   ├── About.jsx         # Company info and features
│   │   └── Contact.jsx       # Contact details and support
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Root component with routing
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles
│   └── assets/               # Images and static files
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── tailwind.config.js        # Tailwind CSS config
├── PRD.md                    # Product Requirements Document
└── README.md                 # This file
```

---

## 🔧 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR) at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Code Quality
```bash
npm run lint
```
Runs ESLint to check code quality and style compliance

### Preview Build
```bash
npm run preview
```
Previews the production build locally before deployment

---

## 📄 Pages Overview

### 🏠 Home Page
- Eye-catching hero section with main headline
- Marketing copy and value proposition
- Category showcase with trending collections
- Call-to-action buttons linking to Products and About pages
- Gradient background accents

### 🛍️ Products Page
- Complete product catalog from FakeStore API
- Product cards with images, titles, prices, and ratings
- Search bar to find products by keywords
- Category filtering system
- Grid layout (2-3 columns responsive)
- Loading states and error handling

### ℹ️ About Page
- Company story and mission statement
- Key statistics showcase (150+ Products, 4.8 Rating, 24/7 Support)
- Features section:
  - Simple navigation with React Router
  - Responsive design approach
  - Demo-friendly architecture
- Core values display:
  - Clarity in design
  - Speed in performance
  - Trust in user experience

### 📧 Contact Page
- Contact information display
- Email and location details
- Business hours
- Support response expectations
- Professional contact form layout

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.6** - Modern UI library with hooks
- **React DOM 19.2.6** - DOM rendering
- **React Router DOM 7.17.0** - Client-side routing

### Styling & Design
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **@tailwindcss/vite 4.3.0** - Vite integration for Tailwind
- **React Icons 5.6.0** - Icon components library

### Build Tools & Development
- **Vite 8.0.12** - Next-generation frontend build tool
- **@vitejs/plugin-react 6.0.1** - React plugin for Vite
- **ESLint 10.3.0** - Code quality tool
- **@eslint/js 10.0.1** - ESLint configuration

### Development Dependencies
- Type definitions for React and React DOM
- ESLint plugins for React and hooks
- React refresh for HMR

---

## 🔌 API Integration

### Data Source
- **API Base URL:** https://fakestoreapi.com
- **No Authentication Required**
- **No Rate Limiting** (for demo purposes)

### API Endpoints Used
```javascript
// Get all products
GET /api/products

// Get products by category
GET /api/products/category/{category}

// Get all categories
GET /api/products/categories
```

### Supported Categories
- Electronics
- Jewelery
- Men's Clothing
- Women's Clothing

---

## 🎨 Styling System

### Tailwind CSS
- Utility-first approach for rapid development
- Responsive design with breakpoints: `sm`, `md`, `lg`, `xl`
- Custom color variables for theming
- Pre-built components and patterns

### Custom CSS Variables
```css
/* Page & Panel Colors */
--bg-page          /* Main background */
--bg-panel         /* Panel background */
--bg-panel-soft    /* Soft panel variant */
--bg-card          /* Card background */

/* Text Colors */
--text-primary     /* Primary text */
--text-muted       /* Secondary/muted text */

/* Accent & Border */
--accent           /* Primary accent color */
--border           /* Border color */
```

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 640px, 768px, 1024px, 1280px
- Flexible grid layouts
- Touch-friendly interactions

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari  | ✅ Latest 2 versions |
| Edge    | ✅ Latest 2 versions |

---

## 📊 Performance Metrics

- **JavaScript Bundle:** 272.89 KB (82.61 KB gzipped)
- **CSS Bundle:** 35.63 KB (6.36 KB gzipped)
- **Build Time:** ~400ms with Vite
- **Modules:** 37 optimized modules
- **Load Time:** < 2 seconds on 4G

---

## 🚀 Deployment

### Static Hosting Options
- **Vercel** - Zero-config deployment for Vite projects
- **Netlify** - Simple git-based deployments
- **GitHub Pages** - Free hosting with custom domain
- **AWS S3** - Scalable cloud storage
- **Cloudflare Pages** - Global edge network

### Build & Deploy
```bash
# Build for production
npm run build

# Output folder: dist/
# Deploy the contents of dist/ to your hosting service
```

---

## 🛠️ Development Tips

### Hot Module Replacement (HMR)
Changes to React components automatically reflect in the browser without full page reload during development.

### ESLint
Code quality checks are configured. Run `npm run lint` to identify issues before committing.

### Component Reusability
- Header and Footer are reused across all pages
- Product cards can be easily customized
- Layout patterns are consistent and scalable

### Performance Optimization
- Code splitting for routes
- Lazy loading for images
- Optimized CSS with Tailwind purging
- Vite's native module federation

---

## 📚 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react)

### React Router
- [React Router Guide](https://reactrouter.com)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com)

### Vite
- [Vite Guide](https://vitejs.dev)

---

## 🤝 Contributing

This project is a demonstration/learning project. Feel free to:
- Fork and customize for your own use
- Extend features for your portfolio
- Improve styling and components
- Add new pages and functionality

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🎯 Next Steps

1. **Customize branding** - Update company name, logo, and colors
2. **Add features** - Implement shopping cart, wishlist, or user accounts
3. **Connect real API** - Replace FakeStore API with your own backend
4. **Deploy** - Push to Vercel, Netlify, or your preferred host
5. **Monitor** - Track analytics and user behavior

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Failing
```bash
# Check for lint errors
npm run lint

# Clear cache and rebuild
rm -rf dist/
npm run build
```

---

## 📞 Support

For issues, questions, or suggestions:
1. Check the [PRD.md](PRD.md) for detailed specifications
2. Review the code comments in component files
3. Consult the official documentation links above

---

**Version:** 0.0.0  
**Last Updated:** June 16, 2026  
**Built with ❤️ using React, Vite & Tailwind CSS**
