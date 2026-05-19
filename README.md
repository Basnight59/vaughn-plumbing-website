# Vaughn Plumbing Services Website

Professional website for **Vaughn Plumbing Services, LLC** - Maryland MBE-certified plumbing contractor with 30 years of union-trained master plumber expertise.

🌐 **Live Site:** https://vaughnplumbingservices.com

---

## 📋 Project Information

- **Client:** Harold Vaughn, Vaughn Plumbing Services, LLC
- **Domain:** vaughnplumbingservices.com
- **Developed by:** Sphinx Digital Marketing Agency LLC
- **Maintained by:** Kenneth Basnight ([@basnight59](https://github.com/basnight59))
- **Technology:** React + Vite
- **Hosting:** Netlify
- **Repository:** Private

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/basnight59/vaughn-plumbing-website.git
   cd vaughn-plumbing-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   The site will open at http://localhost:5173

4. **Build for production:**
   ```bash
   npm run build
   ```
   
   Production files will be in the `dist/` folder

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
vaughn-plumbing-website/
├── src/
│   ├── App.jsx           # Main website component
│   └── main.jsx          # React entry point
├── index.html            # HTML template with SEO meta tags
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite build configuration
├── netlify.toml          # Netlify deployment config
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

---

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **Netlify** - Hosting and deployment
- **CSS-in-JS** - Inline styling for component isolation

---

## 🌐 Deployment

### Automatic Deployment (Recommended)

This repository is connected to Netlify. Any push to the `main` branch automatically triggers a deployment.

**Deployment Steps:**
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. Netlify automatically builds and deploys
4. Check deployment status at https://app.netlify.com

### Manual Deployment

If needed, you can deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify via drag & drop:
   - Go to https://app.netlify.com/drop
   - Drag the `dist/` folder
   - Site goes live instantly

---

## ✏️ Making Updates

### Update Contact Information

To change phone numbers, email, or address:

1. Open `src/App.jsx`
2. Search for the placeholder (e.g., `(410) 555-1234`)
3. Replace with actual information
4. Save and commit changes

### Update Content

All website content is in `src/App.jsx`. Sections include:
- Navigation
- Hero section
- Trust bar (statistics)
- Services (tabbed interface)
- About Harold
- Why Choose Us
- Contact form
- Footer

### Update Images

Image placeholders are currently used. To add real photos:

1. Add images to `public/images/` folder
2. Reference them in App.jsx:
   ```jsx
   <img src="/images/harold-photo.jpg" alt="Harold Vaughn" />
   ```

---

## 🎨 Design System

### Colors
- **Primary:** Navy Blue (#1a2332)
- **Accent:** Copper/Orange (#D97740)
- **Background:** Off-white (#fafaf8)
- **Text:** Dark (#1a2332)

### Typography
- **Font Family:** DM Sans, system fonts
- **Weights:** 400 (regular), 500 (medium), 600-800 (bold headings)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 📞 Contact Information

### Current (Placeholder - UPDATE BEFORE LAUNCH)
- **Phone:** (410) 555-1234
- **Email:** harold@vaughnplumbingservices.com
- **Address:** 4900 Truesdale Ave, Baltimore, MD 21206

### For Website Support
- **Developer:** Kenneth Basnight
- **Agency:** Sphinx Digital Marketing Agency LLC
- **Email:** KennethBasnight@sphinxdigitalmarketingagencyllc.com

---

## 📝 SEO & Performance

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt tags (add to images)
- Mobile-responsive design
- Fast load times with Vite

### Performance Optimizations
- Code splitting
- Lazy loading
- Optimized bundle size
- CDN delivery via Netlify

### TODO: Add Before Launch
- [ ] Google Analytics tracking code
- [ ] Google Search Console verification
- [ ] Favicon and app icons
- [ ] Open Graph images
- [ ] XML sitemap

---

## 🔒 Security

- HTTPS enabled automatically via Netlify
- Security headers configured in `netlify.toml`
- No sensitive data in repository
- Environment variables for any secrets

---

## 📋 Pre-Launch Checklist

- [ ] Update all placeholder contact information
- [ ] Add professional photos of Harold
- [ ] Add project portfolio photos
- [ ] Test contact form submissions
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Test on multiple browsers
- [ ] Verify phone click-to-call works
- [ ] Set up professional email
- [ ] Configure Google Business Profile
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Add favicon
- [ ] Test SSL certificate

---

## 🐛 Known Issues / TODO

- [ ] Contact form needs backend integration (currently shows alert)
- [ ] Professional photos needed (using placeholders)
- [ ] Add testimonials section (when available)
- [ ] Add portfolio/projects gallery
- [ ] Set up email notifications for form submissions

---

## 📜 License

This website is proprietary and confidential.  
© 2026 Vaughn Plumbing Services, LLC. All rights reserved.

Developed by Sphinx Digital Marketing Agency LLC.

---

## 🔄 Version History

### Version 1.0.0 (May 19, 2026)
- Initial website launch
- React + Vite setup
- Full-featured single-page application
- Mobile-responsive design
- Professional industrial aesthetic
- MBE certification highlighted
- 30 years experience emphasized
- Union-trained credibility
- Contact form
- Service descriptions
- About section

---

## 🤝 Contributing

This is a private repository. For updates or changes:

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Commit with clear message:
   ```bash
   git commit -m "Add: description of what you added"
   ```

4. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Merge to main when ready

---

## 📞 Support

For questions or issues with this website:

**Kenneth Basnight**  
Sphinx Digital Marketing Agency LLC  
Email: KennethBasnight@sphinxdigitalmarketingagencyllc.com

---

**Built with ❤️ for Harold Vaughn and Vaughn Plumbing Services**
