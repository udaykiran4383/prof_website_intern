// CAV Page Specific JavaScript

// Initialize CAV page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCAVPage();
});

// CAV Page Initialization
function initializeCAVPage() {
    // Set current year for copyright
    setCurrentYear();
    
    // Initialize navigation functionality
    initializeCAVNavigation();
    
    // Initialize contact form
    initializeCAVContactForm();
    
    // Initialize scroll-based navigation highlighting
    initializeScrollNavigation();
    
    // Initialize animations
    initializeCAVAnimations();
}

// Set current year in footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// CAV Navigation Functionality
function initializeCAVNavigation() {
    // Set active section function (global for onclick handlers)
    window.setActiveSection = function(sectionId) {
        // Remove active class from all nav links
        document.querySelectorAll('.cav-page-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        const activeLink = document.querySelector(`[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Smooth scroll to section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add click event listeners to navigation links
    const cavNavLinks = document.querySelectorAll('.cav-page-nav-link');
    cavNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            setActiveSection(targetId);
        });
    });
}

// CAV Contact Form Functionality
function initializeCAVContactForm() {
    const cavContactForm = document.getElementById('cavContactForm');
    if (cavContactForm) {
        cavContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(cavContactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const inquiry = formData.get('inquiry');
            const message = formData.get('message');
            
            // Validate form
            if (!validateCAVForm(name, email, inquiry, message)) {
                return;
            }
            
            // Create mailto link
            const subject = `CAV Research Inquiry: ${inquiry}`;
            const body = `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiry}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:archak@civil.iitb.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showCAVNotification('Email client opened! Please send your message.', 'success');
            
            // Reset form
            cavContactForm.reset();
        });
    }
}

// Validate CAV Contact Form
function validateCAVForm(name, email, inquiry, message) {
    if (!name || name.trim() === '') {
        showCAVNotification('Please enter your name.', 'error');
        return false;
    }
    
    if (!email || email.trim() === '') {
        showCAVNotification('Please enter your email address.', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showCAVNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!inquiry || inquiry === '') {
        showCAVNotification('Please select an inquiry type.', 'error');
        return false;
    }
    
    if (!message || message.trim() === '') {
        showCAVNotification('Please enter your message.', 'error');
        return false;
    }
    
    return true;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll-based Navigation Highlighting
function initializeScrollNavigation() {
    const cavNavLinks = document.querySelectorAll('.cav-page-nav-link');
    const cavSections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        cavSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        cavNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// CAV Animations
function initializeCAVAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    const animatedElements = document.querySelectorAll(
        '.cav-hero-content, .cav-about-grid, .facilities-grid, ' +
        '.research-areas-grid, .collaboration-grid, .cav-contact-grid, ' +
        '.cav-mission-card, .cav-vision-card, .cav-approach-card, ' +
        '.facility-card, .research-area-card, .collaboration-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// CAV Notification System
function showCAVNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.cav-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `cav-notification cav-notification-${type}`;
    notification.innerHTML = `
        <div class="cav-notification-content">
            <span class="cav-notification-message">${message}</span>
            <button class="cav-notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}



// CAV Form Enhancement
function enhanceCAVForm() {
    const formInputs = document.querySelectorAll('.cav-contact-form input, .cav-contact-form textarea, .cav-contact-form select');
    
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Add character count for textarea
        if (input.tagName === 'TEXTAREA') {
            const charCount = document.createElement('div');
            charCount.className = 'char-count';
            charCount.style.cssText = `
                font-size: 0.75rem;
                color: #6b7280;
                text-align: right;
                margin-top: 0.25rem;
            `;
            input.parentElement.appendChild(charCount);
            
            input.addEventListener('input', function() {
                const count = this.value.length;
                const maxLength = this.getAttribute('maxlength') || 1000;
                charCount.textContent = `${count}/${maxLength} characters`;
                
                if (count > maxLength * 0.9) {
                    charCount.style.color = '#ef4444';
                } else {
                    charCount.style.color = '#6b7280';
                }
            });
        }
    });
}

// Initialize form enhancements
document.addEventListener('DOMContentLoaded', function() {
    enhanceCAVForm();
});

// CAV Smooth Scrolling for all internal links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
});

// CAV Mobile Menu Enhancement - Not needed since we removed main navigation
function initializeCAVMobileMenu() {
    // Mobile menu functionality removed as CAV page has its own navigation
    console.log('CAV page uses its own navigation system');
}

// CAV Performance Optimization
function optimizeCAVPerformance() {
    // Lazy load images if any
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    optimizeCAVPerformance();
});

// Export functions for global access if needed
window.CAVUtils = {
    setActiveSection: window.setActiveSection,
    showNotification: showCAVNotification
}; 