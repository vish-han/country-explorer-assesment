# Country Explorer

Country Explorer is a responsive, accessible, and visually appealing web application that allows users to discover detailed information about every nation worldwide. Built with a focus on UI/UX design, component reuse, and performance optimization, this project leverages the REST Countries API to deliver rich, real-time country data in an intuitive and elegant interface.

***

## ✨ Features

- **🌍 Full-screen dynamic background** with gradient overlay for visual balance
- **🔍 Intelligent search** with debounced, spell-tolerant country search and real-time suggestions
- **📱 Responsive grid layout** displaying country cards with flags, names, currencies, capitals, and regions
- **📊 Comprehensive country details** featuring extensive government, geographic, cultural, and communication data
- **♻️ Reusable components** with compact search bar used across multiple pages
- **🗺️ Google Maps integration** for geographic context
- **📱 Mobile-first design** optimized for all device sizes
- **♿ Accessibility focused** ensuring keyboard navigation and usability standards

***

## ⚡ Performance & Optimization

Country Explorer is built with performance as a core priority, achieving exceptional metrics across all key areas:

### **PageSpeed Insights Scores**
- **🚀 Performance:** 99/100
- **♿ Accessibility:** 94/100
- **✅ Best Practices:** 99/100
- **🔍 SEO:** 100/100

*Last updated: September 1, 2025*

### **Performance Optimizations**
- **Debounced search** to minimize API calls and improve user experience
- **Lazy loading** for images and content to reduce initial load time
- **Efficient state management** to prevent unnecessary re-renders
- **Optimized bundle size** with code splitting and tree shaking
- **Image optimization** with proper sizing and modern formats
- **CSS optimization** with component-scoped styling and minimal unused code


## 🛠️ Technologies

- **React/Next.js 14+** with App Router and modern hooks
- **REST Countries API** for dynamic, real-time country data
- **CSS Modules/Styled Components** for component-scoped styling
- **Vercel** for seamless deployment and hosting
- **TypeScript** for type safety and better developer experience

***

## 🏗️ Architecture & Rendering Strategy

### **Rendering Approach**
This application uses a **hybrid rendering strategy** optimized for performance and SEO:

#### **Static Site Generation (SSG)**
- **`/` (Home Page)** - Pre-rendered at build time for optimal loading speed
- **`/explore` (Countries List)** - Pre-rendered with paginated country data for instant loading

#### **Server-Side Rendering (SSR)**
- **`/countries/[country]` (Country Details)** - Server-rendered on each request for:
   - Real-time data accuracy
   - SEO optimization for individual country pages
   - Dynamic content based on country-specific data

### **Why This Architecture?**
- **Home & List Pages:** Static generation provides instant loading for frequently accessed pages
- **Detail Pages:** Server rendering ensures fresh data and optimal SEO for each country
- **Best of Both Worlds:** Fast static pages where appropriate, dynamic rendering where needed



## 🌐 Live Demo

**Experience the app live:** [https://country-explorer-assesment.vercel.app](https://country-explorer-assesment.vercel.app/)

***

## 🏗️ Component Architecture & Design Philosophy

### **Reusable Components**
- **SearchBar Component:** Used in both full-screen (home) and compact (results) variants
- **CountryCard Component:** Consistent country display across all grid layouts
- **Layout Component:** Shared navigation and footer structure
- **Loading Components:** Skeleton loaders for enhanced UX during data fetching

### **State Management**
- **React Hooks** for local component state
- **Custom hooks** for API data fetching and caching
- **Optimized re-renders** with useMemo and useCallback

### **Performance Optimizations**
- **Debounced search** (300ms delay) to minimize API calls
- **Lazy loading** for country flags and images
- **Virtual scrolling** for large country lists
- **Component code splitting** for optimal bundle sizes

### **User Experience Focus**
- **Progressive disclosure** of information on country details pages
- **Visual hierarchy** using typography, spacing, and color
- **Intuitive navigation** with clear back buttons and breadcrumbs
- **Error handling** with graceful fallbacks and user feedback
- **Skeleton loading states** for better perceived performance

***
***

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vish-han/country-explorer-assesment.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd country-explorer-assesment/country-explorer
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```
   Add any necessary environment variables:
   ```env
   NEXT_PUBLIC_API_URL=https://restcountries.com/v3.1
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

***

## 📱 Application Structure

```
src/
├── app/                    # Next.js 14+ App Router
│   ├── page.tsx           # Home page (SSG)
│   ├── explore/           # Countries exploration
│   │   └── page.tsx       # Countries list (SSG)
│   ├── countries/         
│   │   └── [country]/     
│   │       └── page.tsx   # Country details (SSR)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── SearchBar/         # Main search functionality
│   │   ├── SearchBar.tsx
│   │   └── index.ts
│   ├── CountryCard/       # Individual country display
│   │   ├── CountryCard.tsx
│   │   └── index.ts
│   ├── Layout/            # Page layout wrapper
│   └── ui/                # Base UI components
├── hooks/                 # Custom React hooks
│   ├── useDebounce.ts
│   ├── useCountries.ts
├── lib/                   # Utility functions & API
│   ├── api.ts            # REST Countries API integration
│   ├── utils.ts          # Helper functions
│   └── types.ts          # TypeScript definitions
└── public/               # Static assets
```

***

## 🎨 Design System

### **Color Palette**
- **Primary Orange:** `#FF6B35` - Used for CTAs and interactive elements
- **Neutral Grays:** `#2D3748`, `#4A5568`, `#718096` for text hierarchy
- **Background:** `#F7FAFC` for light theme, `#1A202C` for dark theme
- **Status Colors:** Green (`#38A169`) for success, Red (`#E53E3E`) for errors

### **Typography Scale**
- **Display:** 48px/56px for hero text
- **Heading 1:** 36px/44px for page titles
- **Heading 2:** 24px/32px for section titles
- **Body:** 16px/24px for readable content
- **Caption:** 14px/20px for metadata

### **Spacing System**
- **Base unit:** 8px
- **Scale:** 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Container max-width:** 1200px with responsive padding

### **Component Design Principles**
- **Mobile-first responsive design** with breakpoints at 640px, 768px, 1024px, 1280px
- **Touch-friendly interactions** with minimum 44px touch targets
- **Consistent visual hierarchy** with proper heading structure
- **Accessible color contrast** meeting WCAG AA standards (4.5:1 ratio)

***

## 🔄 API Integration & Data Flow

### **REST Countries API Integration**
Base URL: `https://restcountries.com/v3.1`

#### **Endpoints Used:**
- **Search:** `/name/{name}` - Country search with spell tolerance
- **All Countries:** `/all` - Complete country list for pagination
- **By Code:** `/alpha/{code}` - Individual country details by ISO code

#### **Data Fetching Strategy:**
- **Home Page:** No initial API calls (SSG)
- **Countries List:** Pre-fetched at build time with pagination (SSG)
- **Country Details:** Fresh data on each request (SSR)
- **Search Results:** Client-side debounced requests

#### **Error Handling:**
- Network failures with retry logic
- Invalid country codes with fallback suggestions
- Empty search results with helpful messaging
- API rate limiting with graceful degradation

***

## 🧩 Key Components

### **SearchBar Component**
**Location:** `src/components/SearchBar/`
- **Variants:** Full-screen (home) and compact (results page)
- **Features:** Debounced input, autocomplete suggestions, keyboard navigation
- **Accessibility:** ARIA labels, screen reader support, focus management

### **CountryCard Component**
**Location:** `src/components/CountryCard/`
- **Displays:** Flag, name, capital, currency, region, population
- **Features:** Hover effects, responsive sizing, loading states
- **Performance:** Lazy-loaded images with placeholder

### **Pagination Component**
**Location:** `src/components/Pagination/`
- **Strategy:** Load more button with infinite scroll option
- **Performance:** Virtual scrolling for large datasets
- **UX:** Clear loading indicators and smooth transitions

***

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run test         # Run test suite
```

***

## 🌍 Deployment

### **Vercel Deployment**
The application is automatically deployed on Vercel with:
- **Preview deployments** for all pull requests
- **Production deployment** from main branch
- **Environment variables** configured in Vercel dashboard
- **Custom domain** support with SSL

### **Build Configuration**
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
}
```

***

## 🔐 Security & Best Practices

- **Environment variables** for sensitive configuration
- **API rate limiting** to prevent abuse
- **Input sanitization** for search queries
- **HTTPS enforcement** in production
- **Content Security Policy** headers
- **No sensitive data** stored in localStorage

***

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### **Development Guidelines**
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test across different devices and browsers

***

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

***

## 🙏 Acknowledgments

- **REST Countries API** for providing comprehensive country data
- **Vercel** for excellent deployment and hosting platform
- **React/Next.js Community** for amazing documentation and resources

***

**Built with ❤️ by [Vishal Chauhan]** | [GitHub](https://github.com/vish-han) | [LinkedIn](#)
