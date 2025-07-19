# Professor Archak Mittal - Academic Website

A modern, responsive academic website for Professor Archak Mittal from the Indian Institute of Technology Bombay, Department of Civil Engineering.

## 🌟 Features

### 📚 **Academic Sections**
- **Home**: Professional introduction and research overview
- **About**: Academic background, expertise, and achievements
- **Research**: Current research areas and methodologies
- **Publications**: Academic papers, journals, and conference proceedings
- **Awards**: Recognition and honors received
- **Projects**: Ongoing and completed research projects
- **Patents**: Published patents and applications under review
- **CAV**: Connected and Autonomous Vehicles research focus
- **Contact**: Professional contact information and location

### 👥 **Team Management**
- **Current Members**: Post-docs, PhD candidates, M.Tech, B.Tech students, and staff
- **Past Members**: Alumni and former team members
- **Tree Structure**: Visual representation of team hierarchy
- **Compact Design**: Space-efficient member display

### 🔧 **Admin Dashboard**
- **Content Management**: Add, edit, and delete team members
- **Publication Management**: Manage academic publications
- **Award Management**: Track awards and recognition
- **Research Area Management**: Update research focus areas
- **Settings**: Website configuration and preferences

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/udaykiran4383/prof_website_intern.git
   cd prof_website_intern
   ```

2. **Start local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
professor-mittal-website/
├── index.html              # Home page
├── about.html              # About page
├── research.html           # Research page
├── publications.html       # Publications page
├── awards.html             # Awards page
├── projects.html           # Projects page
├── patents.html            # Patents page
├── cav.html               # CAV research page
├── contact.html           # Contact page
├── team-members.html      # Team page
├── admin.html             # Admin dashboard
├── styles.css             # Main stylesheet
├── script.js              # Main JavaScript
├── cav.css               # CAV page styles
├── cav.js                # CAV page scripts
├── components/            # React/Next.js components
├── app/                   # Next.js app directory
├── public/                # Static assets
├── lib/                   # Utility libraries
├── hooks/                 # Custom React hooks
├── tests/                 # Test files
└── docs/                  # Documentation
```

## 🎨 Design Features

### **Color Scheme**
- **Primary**: IITB Navy Blue (#003366)
- **Accent**: IITB Orange (#FF6B35)
- **Background**: Clean whites and light grays
- **Text**: Dark grays for readability

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600, 700)
- **Body Text**: Regular weight (400)
- **Responsive**: Scales appropriately on all devices

### **Layout**
- **Responsive Grid**: CSS Grid and Flexbox
- **Mobile-First**: Optimized for mobile devices
- **Card-Based**: Modern card layouts
- **Tree Structure**: Visual team hierarchy

## 🔧 Technical Stack

### **Frontend**
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid/Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons and visual elements

### **Features**
- **localStorage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: WCAG compliant

### **Development Tools**
- **Git**: Version control
- **Local Server**: Development environment
- **Browser DevTools**: Debugging and testing

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ screens
- **Tablet**: 768px - 1199px screens
- **Mobile**: 320px - 767px screens

### **Breakpoints**
```css
/* Mobile */
@media (max-width: 767px)

/* Tablet */
@media (min-width: 768px) and (max-width: 1199px)

/* Desktop */
@media (min-width: 1200px)
```

## 🔐 Admin Features

### **Authentication**
- Simple client-side authentication
- Session management
- Secure logout functionality

### **Content Management**
- **Team Members**: Add, edit, delete team members
- **Publications**: Manage academic publications
- **Awards**: Track awards and recognition
- **Research Areas**: Update research focus
- **Settings**: Website configuration

### **Data Persistence**
- **localStorage**: Client-side data storage
- **JSON Format**: Structured data storage
- **Real-time Updates**: Immediate content reflection

## 🧪 Testing

### **Test Files**
- `test-integration.html`: Basic integration testing
- `admin-team-test.html`: Comprehensive test suite
- `integration-test.js`: Automated test functions

### **Test Coverage**
- ✅ localStorage functionality
- ✅ Admin data structure
- ✅ Team member addition
- ✅ Team page integration
- ✅ Data persistence
- ✅ Responsive design
- ✅ Cross-browser compatibility

### **Running Tests**
1. Open `http://localhost:8000/admin-team-test.html`
2. Use the test interface to verify functionality
3. Check console for detailed test results

## 🚀 Deployment

### **Static Hosting**
The website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Automatic deployments from Git
- **AWS S3**: Scalable static hosting

### **Deployment Steps**
1. Build the project (if using build tools)
2. Upload files to hosting service
3. Configure custom domain (optional)
4. Set up SSL certificate

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Code Standards**
- **HTML**: Semantic markup, accessibility
- **CSS**: BEM methodology, responsive design
- **JavaScript**: ES6+ syntax, error handling
- **Documentation**: Clear comments and README updates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍🏫 About Professor Archak Mittal

**Professor Archak Mittal** is a distinguished faculty member at the Indian Institute of Technology Bombay, Department of Civil Engineering. His research focuses on:

- **Transportation Systems Engineering**
- **Connected and Autonomous Vehicles (CAV)**
- **Smart Cities and Urban Mobility**
- **Traffic Flow Analysis and Optimization**
- **V2X Communication Systems**

### **Research Areas**
- Intelligent Transportation Systems
- Connected Vehicle Technologies
- Traffic Signal Optimization
- Urban Mobility Solutions
- Transportation Safety

## 📞 Contact

### **Professor Archak Mittal**
- **Email**: [archak.mittal@iitb.ac.in](mailto:archak.mittal@iitb.ac.in)
- **Department**: Civil Engineering
- **Institution**: Indian Institute of Technology Bombay
- **Location**: Mumbai, Maharashtra, India

### **Website Support**
- **Repository**: [GitHub](https://github.com/udaykiran4383/prof_website_intern)
- **Issues**: Report bugs and feature requests
- **Documentation**: See `/docs` folder for detailed guides

## 🎯 Future Enhancements

### **Planned Features**
- [ ] Database integration for dynamic content
- [ ] User authentication and role management
- [ ] Content management system (CMS)
- [ ] Blog/News section
- [ ] Research collaboration tools
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] API endpoints for external integrations

### **Technical Improvements**
- [ ] Progressive Web App (PWA) features
- [ ] Service worker for offline functionality
- [ ] Advanced caching strategies
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Accessibility enhancements

---

**Built with ❤️ for academic excellence and research collaboration** 