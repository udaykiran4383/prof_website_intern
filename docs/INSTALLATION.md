# Installation Guide

## Prerequisites

Before installing the Professor Archak Mittal website, ensure you have the following:

- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **Local Web Server**: For development and testing
- **Git**: For version control (optional)

## Quick Start

### 1. Download the Project

#### Option A: Clone from GitHub
```bash
git clone https://github.com/udaykiran4383/prof_website_intern.git
cd prof_website_intern
```

#### Option B: Download ZIP
1. Go to the GitHub repository
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Navigate to the extracted folder

### 2. Start Local Server

Choose one of the following methods:

#### Python 3 (Recommended)
```bash
python3 -m http.server 8000
```

#### Python 2
```bash
python -m SimpleHTTPServer 8000
```

#### Node.js
```bash
npx http-server -p 8000
```

#### PHP
```bash
php -S localhost:8000
```

#### Live Server (VS Code Extension)
1. Install Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### 3. Access the Website

Open your web browser and navigate to:
```
http://localhost:8000
```

## Development Setup

### 1. Project Structure
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

### 2. File Dependencies

#### Core Files
- `index.html` - Main entry point
- `styles.css` - Global styles
- `script.js` - Global JavaScript

#### Page-Specific Files
- `cav.html` + `cav.css` + `cav.js` - CAV research page
- `admin.html` - Admin dashboard (uses `script.js`)

#### External Dependencies
- Font Awesome (CDN) - Icons
- Google Fonts (CDN) - Typography
- Inter font family

### 3. Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |

## Configuration

### 1. Customization

#### Colors
Edit `styles.css` to modify the color scheme:
```css
:root {
    --iitb-navy: #003366;
    --iitb-accent: #FF6B35;
    /* Add your custom colors here */
}
```

#### Content
- Update content in respective HTML files
- Modify team data in `team-members.html`
- Update admin settings in `admin.html`

### 2. Admin Panel Setup

1. Access admin panel: `http://localhost:8000/admin.html`
2. Use any email/password for login (development mode)
3. Add team members, publications, awards, etc.
4. Data is stored in browser localStorage

### 3. Testing

Run the test suite:
1. Open `http://localhost:8000/admin-team-test.html`
2. Follow the test procedures
3. Check console for detailed results

## Troubleshooting

### Common Issues

#### 1. Page Not Loading
- Ensure the server is running
- Check the port number (default: 8000)
- Verify file paths are correct

#### 2. Styles Not Loading
- Check if `styles.css` is in the correct location
- Verify CSS file permissions
- Clear browser cache

#### 3. JavaScript Errors
- Open browser DevTools (F12)
- Check Console tab for errors
- Verify `script.js` is loaded correctly

#### 4. Admin Panel Issues
- Clear browser localStorage
- Check if all required functions are defined
- Verify form validation

#### 5. Team Page Not Updating
- Refresh the page after admin changes
- Check localStorage data structure
- Verify team member data format

### Debug Mode

Enable debug mode by adding this to any HTML file:
```html
<script>
    // Enable debug logging
    window.DEBUG = true;
    console.log('Debug mode enabled');
</script>
```

## Production Deployment

### 1. Static Hosting

#### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch (main)
4. Configure custom domain (optional)

#### Netlify
1. Drag and drop project folder to Netlify
2. Configure build settings
3. Set up custom domain

#### Vercel
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### 2. Server Configuration

#### Apache
```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]
```

#### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 3. SSL Certificate

For HTTPS:
1. Obtain SSL certificate (Let's Encrypt)
2. Configure web server
3. Redirect HTTP to HTTPS

## Support

### Getting Help

1. **Check Documentation**: Review README.md and TESTS.md
2. **Run Tests**: Use the test suite to identify issues
3. **Browser DevTools**: Check console for errors
4. **GitHub Issues**: Report bugs and feature requests

### Contact

- **Repository**: [GitHub](https://github.com/udaykiran4383/prof_website_intern)
- **Issues**: [GitHub Issues](https://github.com/udaykiran4383/prof_website_intern/issues)
- **Email**: archak.mittal@iitb.ac.in

---

**Last Updated**: July 19, 2024  
**Version**: 1.0.0 