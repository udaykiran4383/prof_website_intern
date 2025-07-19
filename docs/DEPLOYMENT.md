# Deployment Guide

## 🚀 Deployment Options

This guide covers various deployment options for the Professor Archak Mittal academic website.

## 📋 Prerequisites

Before deploying, ensure you have:
- All project files committed to Git
- A GitHub account (for GitHub Pages)
- Domain name (optional, for custom domain)

## 🌐 GitHub Pages (Recommended)

### Automatic Deployment

1. **Repository Setup**
   ```bash
   # Ensure your repository is on GitHub
   git remote -v
   # Should show: origin https://github.com/udaykiran4383/prof_website_intern.git
   ```

2. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Select "/ (root)" folder
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://udaykiran4383.github.io/prof_website_intern/`
   - It may take a few minutes to deploy

### Custom Domain (Optional)

1. **Add Custom Domain**
   - In GitHub Pages settings, enter your domain
   - Add CNAME record pointing to `udaykiran4383.github.io`
   - Enable "Enforce HTTPS"

2. **Update Repository**
   ```bash
   # Add CNAME file
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

## ☁️ Netlify

### Drag & Drop Deployment

1. **Prepare Files**
   - Ensure all files are in the project root
   - Remove any development-only files

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Wait for deployment to complete

3. **Configure**
   - Set custom domain (optional)
   - Enable HTTPS
   - Configure build settings if needed

### Git Integration

1. **Connect Repository**
   - Link your GitHub repository
   - Set build command: (leave empty for static site)
   - Set publish directory: `/` (root)

2. **Automatic Deployments**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

## ⚡ Vercel

### Quick Deploy

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect it's a static site

2. **Configure**
   - Framework preset: "Other"
   - Build command: (leave empty)
   - Output directory: `/` (root)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
# Use nginx as base image
FROM nginx:alpine

# Copy website files
COPY . /usr/share/nginx/html/

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
# Build Docker image
docker build -t prof-website .

# Run container
docker run -d -p 80:80 prof-website

# Access at http://localhost
```

## 🖥️ Traditional Web Server

### Apache Configuration

1. **Upload Files**
   ```bash
   # Upload all files to web server
   scp -r . user@server:/var/www/html/
   ```

2. **Configure Apache**
   ```apache
   # /etc/apache2/sites-available/prof-website.conf
   <VirtualHost *:80>
       ServerName yourdomain.com
       DocumentRoot /var/www/html
       
       <Directory /var/www/html>
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

3. **Enable Site**
   ```bash
   sudo a2ensite prof-website
   sudo systemctl reload apache2
   ```

### Nginx Configuration

1. **Upload Files**
   ```bash
   # Upload all files to web server
   scp -r . user@server:/var/www/html/
   ```

2. **Configure Nginx**
   ```nginx
   # /etc/nginx/sites-available/prof-website
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/prof-website /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## 🔒 SSL/HTTPS Setup

### Let's Encrypt (Free)

1. **Install Certbot**
   ```bash
   # Ubuntu/Debian
   sudo apt install certbot python3-certbot-apache
   
   # CentOS/RHEL
   sudo yum install certbot python3-certbot-apache
   ```

2. **Obtain Certificate**
   ```bash
   # Apache
   sudo certbot --apache -d yourdomain.com
   
   # Nginx
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Auto-renewal**
   ```bash
   # Test renewal
   sudo certbot renew --dry-run
   
   # Add to crontab
   echo "0 12 * * * /usr/bin/certbot renew --quiet" | sudo crontab -
   ```

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] Minify CSS and JavaScript
- [ ] Optimize images
- [ ] Enable gzip compression
- [ ] Set cache headers
- [ ] Remove unused files

### Optimization Tools

```bash
# Install optimization tools
npm install -g html-minifier cssnano uglify-js

# Minify HTML
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true index.html > index.min.html

# Minify CSS
cssnano styles.css > styles.min.css

# Minify JavaScript
uglifyjs script.js -o script.min.js
```

## 🔍 Post-Deployment Testing

### Functionality Tests

1. **Basic Navigation**
   - Test all page links
   - Verify responsive design
   - Check admin panel access

2. **Admin Features**
   - Test login/logout
   - Add/edit/delete team members
   - Verify data persistence

3. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers
   - Different screen sizes

### Performance Tests

1. **PageSpeed Insights**
   - Run Google PageSpeed Insights
   - Address performance issues
   - Optimize loading times

2. **Lighthouse Audit**
   ```bash
   # Install Lighthouse
   npm install -g lighthouse
   
   # Run audit
   lighthouse https://yourdomain.com --output html --output-path ./lighthouse-report.html
   ```

## 🚨 Troubleshooting

### Common Issues

#### 1. 404 Errors
- Check file paths
- Verify .htaccess configuration
- Ensure index.html exists

#### 2. CSS/JS Not Loading
- Check file permissions
- Verify file paths
- Clear browser cache

#### 3. Admin Panel Issues
- Check localStorage support
- Verify JavaScript execution
- Test in different browsers

#### 4. SSL Certificate Issues
- Verify domain configuration
- Check certificate expiration
- Test HTTPS redirects

### Debug Commands

```bash
# Check file permissions
ls -la

# Test web server
curl -I http://yourdomain.com

# Check SSL certificate
openssl s_client -connect yourdomain.com:443

# Monitor logs
tail -f /var/log/apache2/access.log
tail -f /var/log/nginx/access.log
```

## 📈 Monitoring

### Analytics Setup

1. **Google Analytics**
   ```html
   <!-- Add to all HTML files -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Uptime Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Configure email/SMS alerts
   - Monitor response times

### Backup Strategy

1. **Regular Backups**
   ```bash
   # Create backup script
   #!/bin/bash
   tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/html/
   ```

2. **Version Control**
   - Keep all changes in Git
   - Use tags for releases
   - Maintain deployment history

## 📞 Support

### Getting Help

- **Documentation**: Check README.md and INSTALLATION.md
- **Issues**: Report on GitHub Issues
- **Community**: Ask in relevant forums

### Emergency Contacts

- **Hosting Provider**: Contact your hosting provider
- **Domain Registrar**: Contact domain registrar for DNS issues
- **SSL Provider**: Contact Let's Encrypt or your SSL provider

---

**Last Updated**: July 19, 2024  
**Version**: 1.0.0 