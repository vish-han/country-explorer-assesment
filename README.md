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
- **🚀 Performance:** 100/100
- **♿ Accessibility:** 94/100
- **✅ Best Practices:** 100/100
- **🔍 SEO:** 100/100

*Last updated: September 1, 2025*

### **Performance Optimizations**
- **Debounced search** to minimize API calls and improve user experience
- **Lazy loading** for images and content to reduce initial load time
- **Efficient state management** to prevent unnecessary re-renders
- **Optimized bundle size** with code splitting and tree shaking
- **Image optimization** with proper sizing and modern formats
- **CSS optimization** with component-scoped styling and minimal unused code

### **Technical Excellence**
- **100% Performance Score** indicates optimal loading speeds and smooth user interactions
- **Near-perfect Accessibility** (94/100) ensuring the app is usable by everyone
- **Perfect Best Practices** compliance following web standards and security guidelines
- **Complete SEO optimization** for maximum discoverability

***

## 🛠️ Technologies

- **React/Next.js** with modern hooks and state management
- **REST Countries API** for dynamic, real-time country data
- **CSS Modules/Styled Components** for component-scoped styling
- **Vercel** for seamless deployment and hosting
- **TypeScript** for type safety and better developer experience

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
   Add any necessary environment variables (API endpoints, keys, etc.)

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application in action.

***

## 🌐 Live Demo

**Experience the app live:** [https://country-explorer-assesment.vercel.app](https://country-explorer-assesment.vercel.app/)

***

## 🏗️ Architecture & Design Philosophy

### **Component Architecture**
- **Modular design** with reusable, testable components
- **Clean separation** of concerns between UI, logic, and data
- **Responsive components** that adapt to different screen sizes
- **Accessibility-first** approach with proper ARIA attributes

### **Performance Optimizations**
- **Debounced search** to minimize API calls
- **Lazy loading** for images and content
- **Efficient state management** to prevent unnecessary re-renders
- **Optimized bundle size** with code splitting

### **User Experience Focus**
- **Progressive disclosure** of information on country details pages
- **Visual hierarchy** using typography, spacing, and color
- **Intuitive navigation** with clear back buttons and breadcrumbs
- **Error handling** with graceful fallbacks and user feedback

***

## 📱 Application Structure

```
src/
├── components/           # Reusable UI components
│   ├── SearchBar/       # Main search functionality
│   ├── CountryCard/     # Individual country display
│   └── Layout/          # Page layout wrapper
├── pages/               # Next.js pages
│   ├── index.js         # Home page
│   ├── countries/       # Search results
│   └── country/[id].js  # Individual country details
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
└── styles/              # Global and component styles
```

***

## 🎨 Design Highlights

### **Color Palette**
- **Primary Orange:** `#FF6B35` - Used for CTAs and highlights
- **Neutral Grays:** Various shades for text and backgrounds
- **Status Colors:** Green for positive states, organized information hierarchy

### **Typography**
- **Clear hierarchy** with consistent heading sizes
- **Readable body text** optimized for scanning
- **Accessible contrast ratios** meeting WCAG guidelines

### **Layout Principles**
- **Grid-based design** for consistent alignment
- **Generous whitespace** for improved readability
- **Card-based information** architecture for easy scanning

***

## 🔄 API Integration

This application integrates with the **REST Countries API** (`https://restcountries.com/`) to fetch:
- Basic country information (name, flag, capital, population)
- Geographic data (coordinates, area, borders, timezones)
- Political information (independence status, UN membership)
- Cultural details (languages, currencies, native names)
- Communication codes (phone, ISO, domain)

***

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### **Development Guidelines**
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

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

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/81190653/69dc178e-e5a5-4ddc-a9c4-d056831237b5/image.jpg)
