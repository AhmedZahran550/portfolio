# Ahmed Zahran - Portfolio Website 🚀

A modern, responsive personal portfolio website designed to showcase my skills, experience, and projects as a Backend Developer specializing in Node.js and Nest.js.

## 🛠 Tech Stack

- **Structure**: HTML5
- **Styling**: Tailwind CSS (via CDN) & Custom CSS
- **Animations**: AOS (Animate On Scroll)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter)

## ✨ Features

### Core Features

- **Interactive Background**: Custom HTML5 Canvas "Neural Network" animation with particle system
- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Glassmorphism UI**: Modern, translucent card aesthetics with backdrop blur
- **Smooth Navigation**: Scroll-behavior optimized with section anchoring
- **Dynamic Content**: Sections for Experience, Skills, and Projects
- **Typewriter Effect**: Animated text showcasing multiple roles

### Recent Enhancements (Dec 2024)

#### 🔐 Security & SEO

- ✅ **Security Headers**: Added X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- ✅ **SEO Optimization**: Canonical URL, absolute Open Graph URLs, JSON-LD structured data
- ✅ **Sitemap & Robots.txt**: Proper search engine indexing support
- ✅ **External Link Security**: Added rel="noopener noreferrer" to all external links

#### ♿ Accessibility

- ✅ **ARIA Labels**: Added descriptive labels for screen readers
- ✅ **Alt Text**: Comprehensive alt attributes on all images
- ✅ **Reduced Motion Support**: Respects prefers-reduced-motion for animations
- ✅ **Keyboard Navigation**: Improved focus management and mobile menu accessibility

#### ⚡ Performance

- ✅ **Resource Hints**: Preconnect and preload for critical assets
- ✅ **Optimized Canvas**: Better particle calculation, error handling
- ✅ **Lazy Loading**: Ready for images below the fold
- ✅ **Smooth Scrolling**: Fixed navbar scroll offset

#### 🎨 UX Improvements

- ✅ **Loading Screen**: Smooth page load transition
- ✅ **Back to Top Button**: Floating button for easy navigation
- ✅ **Active Nav Highlighting**: Shows current section using Intersection Observer
- ✅ **Improved Modals**: Better video playback cleanup, private repo modal

#### 💻 Code Quality

- ✅ **Configuration Management**: Centralized CONFIG object
- ✅ **Error Handling**: Try-catch blocks for canvas and critical operations
- ✅ **Bug Fixes**: Fixed navbar class replacement, video source cleanup
- ✅ **Code Organization**: Better separation of concerns

## 📂 Project Structure

```
portfolio/
├── index.htm           # Main HTML file
├── css/
│   └── styles.css      # Custom styles (glass effects, animations)
├── js/
│   └── main.js         # Canvas logic, interactions, and dynamic rendering
├── assets/             # Images and profile pictures
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
└── .gitignore          # Git exclusions
```

## 🚀 How to Run

Since this project uses Tailwind via CDN, no build step is required for development:

1. Clone the repository:

   ```bash
   git clone https://github.com/AhmedZahran550/portfolio.git
   cd portfolio
   ```

2. Open `index.htm` directly in your preferred web browser, or use a local server:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (with http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

## 🧪 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Verify all navigation links work
- [ ] Check mobile menu functionality
- [ ] Test video modal playback
- [ ] Verify canvas animation performance
- [ ] Run Lighthouse audit (Target: >90 score)
- [ ] Test with screen reader
- [ ] Verify keyboard navigation

## 📈 Performance Metrics

Current optimizations target:

- **First Contentful Paint**: < 2s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **Accessibility Score**: 100

## 🎯 Future Improvements

- [ ] Set up proper Tailwind build process (reduce CSS from ~3MB to ~20KB)
- [ ] Add Google Analytics
- [ ] Add resume download functionality
- [ ] Set up GitHub Actions for automated deployment
- [ ] Add more project demos and videos

## 📬 Contact

- **Email**: [ahmed187zahran@gmail.com](mailto:ahmed187zahran@gmail.com)
- **LinkedIn**: [Ahmed Zahran](https://www.linkedin.com/in/ahmedzahran556122b/)
- **GitHub**: [AhmedZahran550](https://github.com/AhmedZahran550)
- **WhatsApp**: [+20 106 765 5253](https://wa.me/201067655253)

## 📄 License

This project is open source and available for personal and educational use.

---

**Built with ❤️ and Node.js** | Last Updated: December 2024
