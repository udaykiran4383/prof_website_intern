// Make toggleProject function globally available immediately - MUST BE FIRST
window.toggleProject = function(button) {
    console.log('toggleProject function called');
    
    try {
        const projectCard = button.closest('.project-card');
        const projectContent = projectCard.querySelector('.project-content');
        
        console.log('projectCard:', projectCard);
        console.log('projectContent:', projectContent);
        
        if (!projectContent) {
            console.error('Could not find project-content element');
            return;
        }
        
        const isExpanded = projectContent.classList.contains('expanded');
        console.log('isExpanded:', isExpanded);
        
        if (isExpanded) {
            // Collapse
            projectContent.classList.remove('expanded');
            button.innerHTML = '<i class="fas fa-chevron-down"></i> View Details';
            button.classList.remove('expanded');
            console.log('Project collapsed');
        } else {
            // Expand
            projectContent.classList.add('expanded');
            button.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
            button.classList.add('expanded');
            console.log('Project expanded');
        }
    } catch (error) {
        console.error('Error in toggleProject:', error);
    }
};

// Also define it as a regular function for compatibility
function toggleProject(button) {
    return window.toggleProject(button);
}

// Set current year for copyright
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Initialize page-specific functionality
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'contact.html') {
        initializeContactForm();
    } else if (currentPage === 'publications.html') {
        initializeCitationModal();
    } else if (currentPage === 'projects.html') {
        initializeProjectsPage();
    } else if (currentPage === 'cav.html') {
        initializeCAVPage();
    } else if (currentPage === 'admin.html') {
        initializeAdmin();
    } else if (currentPage === 'research.html') {
        initializeResearchPage();
    }

    // Initialize animation observer for all pages
    initializeAnimationObserver();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
    } else {
        mobileMenu.classList.add('active');
        body.classList.add('menu-open');
    }
}

// Close mobile menu when clicking on links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('mobile-nav-link')) {
        const mobileMenu = document.getElementById('mobileMenu');
        const body = document.body;
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Animation observer for fade-in effects
function initializeAnimationObserver() {
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
        '.hero-content, .section-header, .about-grid, .timeline-item, ' +
        '.research-card, .publication-item, .award-item, .project-card, ' +
        '.patent-item, .methodology-step, .contact-card, .stat-card, ' +
        '.admin-card, .cav-section'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:archak@civil.iitb.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Email client opened! Please send your message.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Citation modal functionality
function initializeCitationModal() {
    // Citation modal elements
    const citationModal = document.getElementById('citationModal');
    const citationModalContent = document.getElementById('citationModalContent');
    const closeCitationModal = document.getElementById('closeCitationModal');
    const copyCitationBtn = document.getElementById('copyCitationBtn');

    // Citation buttons
    document.querySelectorAll('.cite-btn').forEach(button => {
        button.addEventListener('click', function() {
            const publicationCard = this.closest('.publication-card');
            const title = publicationCard.querySelector('h3').textContent;
            const journal = publicationCard.querySelector('.publication-meta').textContent;
            
            // Generate citation (APA style)
            const citation = `Mittal, A. (2024). ${title}. ${journal}.`;
            
            citationModalContent.textContent = citation;
            citationModal.style.display = 'block';
        });
    });

    // Close modal
    if (closeCitationModal) {
        closeCitationModal.addEventListener('click', function() {
            citationModal.style.display = 'none';
        });
    }

    // Copy citation
    if (copyCitationBtn) {
        copyCitationBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(citationModalContent.textContent).then(() => {
                showNotification('Citation copied to clipboard!', 'success');
                citationModal.style.display = 'none';
            });
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === citationModal) {
            citationModal.style.display = 'none';
        }
    });
}

// Projects page functionality
function initializeProjectsPage() {
    // Project expand/collapse functionality
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const expandedContent = projectCard.querySelector('.project-expanded');
            const isExpanded = expandedContent.style.display === 'block';
            
            if (isExpanded) {
                expandedContent.style.display = 'none';
                this.innerHTML = '<i class="fas fa-chevron-down"></i> Show Details';
            } else {
                expandedContent.style.display = 'block';
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
            }
        });
    });
}

// Alternative approach - add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all project expand buttons
    const projectButtons = document.querySelectorAll('.project-expand');
    projectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            toggleProject(this);
        });
    });
});

// CAV page functionality - moved to cav.js
function initializeCAVPage() {
    // This function is now handled by cav.js
    console.log('CAV page functionality moved to cav.js');
}

// Admin functionality
let isLoggedIn = false;
let currentEditingId = null;

// Data manager for admin functionality
const dataManager = {
    // Local storage keys
    keys: {
        teamMembers: 'admin_team_members',
        publications: 'admin_publications',
        awards: 'admin_awards',
        settings: 'admin_site_settings',
        openings: 'admin_current_openings',
        researchAreas: 'admin_research_areas'
    },

    // Team members
    getTeamMembers() {
        return JSON.parse(localStorage.getItem(this.keys.teamMembers) || '[]');
    },

    addTeamMember(member) {
        try {
            const members = this.getTeamMembers();
            member.id = 'member_' + Date.now();
            members.push(member);
            localStorage.setItem(this.keys.teamMembers, JSON.stringify(members));
            return true;
        } catch (error) {
            console.error('Error adding team member:', error);
            return false;
        }
    },

    updateTeamMember(id, memberData) {
        try {
            const members = this.getTeamMembers();
            const index = members.findIndex(m => m.id === id);
            if (index !== -1) {
                members[index] = { ...members[index], ...memberData };
                localStorage.setItem(this.keys.teamMembers, JSON.stringify(members));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating team member:', error);
            return false;
        }
    },

    deleteTeamMember(id) {
        try {
            const members = this.getTeamMembers();
            const filteredMembers = members.filter(m => m.id !== id);
            localStorage.setItem(this.keys.teamMembers, JSON.stringify(filteredMembers));
            return true;
        } catch (error) {
            console.error('Error deleting team member:', error);
            return false;
        }
    },

    // Publications
    getPublications() {
        return JSON.parse(localStorage.getItem(this.keys.publications) || '[]');
    },

    addPublication(publication) {
        try {
            const publications = this.getPublications();
            publication.id = 'pub_' + Date.now();
            publications.push(publication);
            localStorage.setItem(this.keys.publications, JSON.stringify(publications));
            return true;
        } catch (error) {
            console.error('Error adding publication:', error);
            return false;
        }
    },

    deletePublication(id) {
        try {
            const publications = this.getPublications();
            const filteredPublications = publications.filter(p => p.id !== id);
            localStorage.setItem(this.keys.publications, JSON.stringify(filteredPublications));
            return true;
        } catch (error) {
            console.error('Error deleting publication:', error);
            return false;
        }
    },

    // Awards
    getAwards() {
        return JSON.parse(localStorage.getItem(this.keys.awards) || '[]');
    },

    addAward(award) {
        try {
            const awards = this.getAwards();
            award.id = 'award_' + Date.now();
            awards.push(award);
            localStorage.setItem(this.keys.awards, JSON.stringify(awards));
            return true;
        } catch (error) {
            console.error('Error adding award:', error);
            return false;
        }
    },

    deleteAward(id) {
        try {
            const awards = this.getAwards();
            const filteredAwards = awards.filter(a => a.id !== id);
            localStorage.setItem(this.keys.awards, JSON.stringify(filteredAwards));
            return true;
        } catch (error) {
            console.error('Error deleting award:', error);
            return false;
        }
    },

    // Site settings
    getSiteSettings() {
        return JSON.parse(localStorage.getItem(this.keys.settings) || '{}');
    },

    updateSiteSettings(settings) {
        try {
            localStorage.setItem(this.keys.settings, JSON.stringify(settings));
            return true;
        } catch (error) {
            console.error('Error updating settings:', error);
            return false;
        }
    },

    getDefaultSettings() {
        return {
            heroTitle: 'Professor Archak Mittal',
            heroSubtitle: 'Assistant Professor of Civil Engineering',
            heroDescription: 'Advancing transportation engineering through connected vehicles and smart city technologies.',
            aboutSummary: 'Research in transportation systems engineering...',
            contactEmail: 'archak@civil.iitb.ac.in',
            contactPhone: '+91-22-2576-7132',
            officeHours: 'Monday-Friday, 2:00 PM - 4:00 PM',
            officeLocation: 'Room 216, Civil Engineering Building'
        };
    },

    // Current Openings
    getOpenings() {
        return JSON.parse(localStorage.getItem(this.keys.openings) || '[]');
    },

    addOpening(opening) {
        try {
            const openings = this.getOpenings();
            opening.id = 'opening_' + Date.now();
            openings.push(opening);
            localStorage.setItem(this.keys.openings, JSON.stringify(openings));
            return true;
        } catch (error) {
            console.error('Error adding opening:', error);
            return false;
        }
    },

    updateOpening(id, openingData) {
        try {
            const openings = this.getOpenings();
            const index = openings.findIndex(o => o.id === id);
            if (index !== -1) {
                openings[index] = { ...openings[index], ...openingData };
                localStorage.setItem(this.keys.openings, JSON.stringify(openings));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating opening:', error);
            return false;
        }
    },

    deleteOpening(id) {
        try {
            const openings = this.getOpenings();
            const filteredOpenings = openings.filter(o => o.id !== id);
            localStorage.setItem(this.keys.openings, JSON.stringify(filteredOpenings));
            return true;
        } catch (error) {
            console.error('Error deleting opening:', error);
            return false;
        }
    },

    // Research Areas
    getResearchAreas() {
        return JSON.parse(localStorage.getItem(this.keys.researchAreas) || '[]');
    },

    addResearchArea(area) {
        try {
            const areas = this.getResearchAreas();
            area.id = 'area_' + Date.now();
            areas.push(area);
            localStorage.setItem(this.keys.researchAreas, JSON.stringify(areas));
            return true;
        } catch (error) {
            console.error('Error adding research area:', error);
            return false;
        }
    },

    updateResearchArea(id, areaData) {
        try {
            const areas = this.getResearchAreas();
            const index = areas.findIndex(a => a.id === id);
            if (index !== -1) {
                areas[index] = { ...areas[index], ...areaData };
                localStorage.setItem(this.keys.researchAreas, JSON.stringify(areas));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating research area:', error);
            return false;
        }
    },

    deleteResearchArea(id) {
        try {
            const areas = this.getResearchAreas();
            const filteredAreas = areas.filter(a => a.id !== id);
            localStorage.setItem(this.keys.researchAreas, JSON.stringify(filteredAreas));
            return true;
        } catch (error) {
            console.error('Error deleting research area:', error);
            return false;
        }
    }
};

// Admin initialization
function initializeAdmin() {
    checkAuthStatus();
    updateStatistics();
    loadAllData();
    setupEventListeners();
}

function checkAuthStatus() {
    isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
        showDashboard();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
}

function login(email, password) {
    // Simple authentication - in production, use proper authentication
    if (email === 'admin@iitb.ac.in' && password === 'admin123') {
        isLoggedIn = true;
        localStorage.setItem('adminLoggedIn', 'true');
        showDashboard();
        showNotification('Login successful!', 'success');
        return true;
    }
    return false;
}

function logout() {
    isLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    showLogin();
    showNotification('Logged out successfully', 'info');
}

// Tab management
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Statistics
function updateStatistics() {
    const teamMembers = dataManager.getTeamMembers();
    const publications = dataManager.getPublications();
    const awards = dataManager.getAwards();
    
    document.getElementById('teamMembersCount').textContent = teamMembers.length;
    document.getElementById('publicationsCount').textContent = publications.length;
    document.getElementById('awardsCount').textContent = awards.length;
}

// Event listeners setup
function setupEventListeners() {
    // Login form
    document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!login(email, password)) {
            showNotification('Invalid credentials', 'error');
        }
    });

    // Team member form
    document.getElementById('teamMemberForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleTeamMemberSubmit();
    });

    // Publication form
    document.getElementById('publicationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handlePublicationSubmit();
    });

    // Award form
    document.getElementById('awardForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleAwardSubmit();
    });

    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleSettingsSubmit();
    });

    // Opening form
    const openingForm = document.getElementById('openingForm');
    if (openingForm) {
        openingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleOpeningSubmit();
        });
    }

    // Research area form
    const researchAreaForm = document.getElementById('researchAreaForm');
    if (researchAreaForm) {
        researchAreaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleResearchAreaSubmit();
        });
    }

    // Category change handler
    document.getElementById('memberCategory').addEventListener('change', function() {
        const category = this.value;
        const graduationGroup = document.getElementById('graduationDateGroup');
        const currentPositionGroup = document.getElementById('currentPositionGroup');
        
        if (category === 'past') {
            graduationGroup.style.display = 'block';
            currentPositionGroup.style.display = 'block';
        } else {
            graduationGroup.style.display = 'none';
            currentPositionGroup.style.display = 'none';
        }
    });
}

// Form submission handlers
function handleTeamMemberSubmit() {
    const formData = {
        name: document.getElementById('memberName').value,
        role: document.getElementById('memberRole').value,
        category: document.getElementById('memberCategory').value,
        subcategory: document.getElementById('memberSubcategory').value,
        joinDate: document.getElementById('memberJoinDate').value,
        graduationDate: document.getElementById('memberGraduationDate').value,
        description: document.getElementById('memberDescription').value,
        currentPosition: document.getElementById('memberCurrentPosition').value,
        image: document.getElementById('memberImage').value
    };

    if (currentEditingId) {
        if (dataManager.updateTeamMember(currentEditingId, formData)) {
            showNotification('Team member updated successfully!', 'success');
            resetTeamForm();
            loadTeamMembers();
            updateStatistics();
        } else {
            showNotification('Failed to update team member', 'error');
        }
    } else {
        if (dataManager.addTeamMember(formData)) {
            showNotification('Team member added successfully!', 'success');
            resetTeamForm();
            loadTeamMembers();
            updateStatistics();
        } else {
            showNotification('Failed to add team member', 'error');
        }
    }
}

function handlePublicationSubmit() {
    const formData = {
        title: document.getElementById('publicationTitle').value,
        journal: document.getElementById('publicationJournal').value,
        year: parseInt(document.getElementById('publicationYear').value),
        url: document.getElementById('publicationUrl').value,
        abstract: document.getElementById('publicationAbstract').value
    };

    if (dataManager.addPublication(formData)) {
        showNotification('Publication added successfully!', 'success');
        resetPublicationForm();
        loadPublications();
        updateStatistics();
    } else {
        showNotification('Failed to add publication', 'error');
    }
}

function handleAwardSubmit() {
    const formData = {
        title: document.getElementById('awardTitle').value,
        year: parseInt(document.getElementById('awardYear').value),
        organization: document.getElementById('awardOrganization').value,
        description: document.getElementById('awardDescription').value
    };

    if (dataManager.addAward(formData)) {
        showNotification('Award added successfully!', 'success');
        resetAwardForm();
        loadAwards();
        updateStatistics();
    } else {
        showNotification('Failed to add award', 'error');
    }
}

function handleSettingsSubmit() {
    const settings = {
        heroTitle: document.getElementById('heroTitle').value,
        heroSubtitle: document.getElementById('heroSubtitle').value,
        heroDescription: document.getElementById('heroDescription').value,
        aboutSummary: document.getElementById('aboutSummary').value,
        contactEmail: document.getElementById('contactEmail').value,
        contactPhone: document.getElementById('contactPhone').value,
        officeHours: document.getElementById('officeHours').value,
        officeLocation: document.getElementById('officeLocation').value
    };

    if (dataManager.updateSiteSettings(settings)) {
        showNotification('Settings saved successfully!', 'success');
    } else {
        showNotification('Failed to save settings', 'error');
    }
}

function handleOpeningSubmit() {
    const formData = {
        position: document.getElementById('openingPosition').value,
        type: document.getElementById('openingType').value,
        duration: document.getElementById('openingDuration').value,
        funding: document.getElementById('openingFunding').value,
        description: document.getElementById('openingDescription').value,
        requirements: document.getElementById('openingRequirements').value
            .split('\n')
            .filter(req => req.trim())
            .map(req => req.trim())
    };

    if (currentEditingId) {
        // Update existing opening
        if (dataManager.updateOpening(currentEditingId, formData)) {
            showNotification('Opening updated successfully!', 'success');
            resetOpeningForm();
            loadOpenings();
            updateStatistics();
        } else {
            showNotification('Failed to update opening', 'error');
        }
    } else {
        // Add new opening
        if (dataManager.addOpening(formData)) {
            showNotification('Opening added successfully!', 'success');
            resetOpeningForm();
            loadOpenings();
            updateStatistics();
        } else {
            showNotification('Failed to add opening', 'error');
        }
    }
}

function handleResearchAreaSubmit() {
    const formData = {
        title: document.getElementById('researchAreaTitle').value,
        description: document.getElementById('researchAreaDescription').value,
        keyPoints: document.getElementById('researchAreaKeyPoints').value
            .split('\n')
            .filter(point => point.trim())
            .map(point => point.trim()),
        methodologies: document.getElementById('researchAreaMethodologies').value
            .split('\n')
            .filter(method => method.trim())
            .map(method => method.trim())
    };

    if (currentEditingId) {
        // Update existing research area
        if (dataManager.updateResearchArea(currentEditingId, formData)) {
            showNotification('Research area updated successfully!', 'success');
            resetResearchAreaForm();
            loadResearchAreas();
            updateStatistics();
        } else {
            showNotification('Failed to update research area', 'error');
        }
    } else {
        // Add new research area
        if (dataManager.addResearchArea(formData)) {
            showNotification('Research area added successfully!', 'success');
            resetResearchAreaForm();
            loadResearchAreas();
            updateStatistics();
        } else {
            showNotification('Failed to add research area', 'error');
        }
    }
}

// Load data functions
function loadAllData() {
    loadTeamMembers();
    loadPublications();
    loadAwards();
    loadOpenings();
    loadResearchAreas();
    loadSettings();
}

function loadTeamMembers() {
    const teamMembers = dataManager.getTeamMembers();
    const container = document.getElementById('teamMembersList');
    
    if (teamMembers.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users"></i>
                <h3>No team members added yet</h3>
                <p>Add team members using the form above.</p>
            </div>
        `;
        return;
    }

    let html = '';
    
    // Group by category
    const currentMembers = teamMembers.filter(m => m.category === 'current');
    const pastMembers = teamMembers.filter(m => m.category === 'past');
    
    if (currentMembers.length > 0) {
        html += '<h3 style="color: var(--iitb-navy); margin-bottom: 1rem;">Current Members</h3>';
        currentMembers.forEach(member => {
            html += renderTeamMemberCard(member, false);
        });
    }
    
    if (pastMembers.length > 0) {
        html += '<h3 style="color: var(--iitb-navy); margin: 2rem 0 1rem;">Past Members</h3>';
        pastMembers.forEach(member => {
            html += renderTeamMemberCard(member, true);
        });
    }
    
    container.innerHTML = html;
}

function renderTeamMemberCard(member, isPast) {
    const subcategoryNames = {
        postdoc: 'Post-Doctoral Fellow',
        phd: 'PhD Candidate',
        mtech: 'M.Tech Student',
        btech: 'B.Tech Student',
        staff: 'Project Staff'
    };

    return `
        <div class="team-member-preview ${isPast ? 'past-member' : 'current-member'}">
            <div class="member-photo-small">
                ${member.image ? 
                    `<img src="${member.image}" alt="${member.name}">` : 
                    '<i class="fas fa-user"></i>'
                }
            </div>
            <div class="member-info">
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
                <div class="member-category">
                    ${subcategoryNames[member.subcategory] || member.subcategory} • 
                    ${member.category === 'current' ? 'Current' : 'Past'} Member
                    ${member.joinDate ? ` • Joined ${formatDate(member.joinDate)}` : ''}
                </div>
            </div>
            <div class="item-actions">
                <button onclick="editTeamMember('${member.id}')" class="btn btn-small btn-outline">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteTeamMember('${member.id}')" class="btn btn-small btn-danger">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

function loadPublications() {
    const publications = dataManager.getPublications();
    const container = document.getElementById('publicationsList');
    
    if (publications.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <h3>No publications added yet</h3>
                <p>Add publications using the form above.</p>
            </div>
        `;
        return;
    }

    let html = '';
    publications.sort((a, b) => b.year - a.year).forEach(publication => {
        html += `
            <div class="item-card">
                <div class="item-header">
                    <div class="item-title">${publication.title}</div>
                    <div class="item-actions">
                        <button onclick="deletePublication('${publication.id}')" class="btn btn-small btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="item-meta">${publication.journal} • ${publication.year}</div>
                ${publication.abstract ? `<div class="item-description">${publication.abstract}</div>` : ''}
                ${publication.url ? `<a href="${publication.url}" target="_blank" style="color: var(--iitb-navy); font-size: 0.875rem;"><i class="fas fa-external-link-alt"></i> View Publication</a>` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function loadAwards() {
    const awards = dataManager.getAwards();
    const container = document.getElementById('awardsList');
    
    if (awards.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-award"></i>
                <h3>No awards added yet</h3>
                <p>Add awards using the form above.</p>
            </div>
        `;
        return;
    }

    let html = '';
    awards.sort((a, b) => b.year - a.year).forEach(award => {
        html += `
            <div class="item-card">
                <div class="item-header">
                    <div class="item-title">${award.title}</div>
                    <div class="item-actions">
                        <button onclick="deleteAward('${award.id}')" class="btn btn-small btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="item-meta">${award.year}${award.organization ? ` • ${award.organization}` : ''}</div>
                ${award.description ? `<div class="item-description">${award.description}</div>` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function loadSettings() {
    const settings = dataManager.getSiteSettings();
    
    document.getElementById('heroTitle').value = settings.heroTitle || '';
    document.getElementById('heroSubtitle').value = settings.heroSubtitle || '';
    document.getElementById('heroDescription').value = settings.heroDescription || '';
    document.getElementById('aboutSummary').value = settings.aboutSummary || '';
    document.getElementById('contactEmail').value = settings.contactEmail || '';
    document.getElementById('contactPhone').value = settings.contactPhone || '';
    document.getElementById('officeHours').value = settings.officeHours || '';
    document.getElementById('officeLocation').value = settings.officeLocation || '';
}

function loadOpenings() {
    const openings = dataManager.getOpenings();
    const container = document.getElementById('openingsList');
    
    if (!container) return; // Admin page only
    
    if (openings.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-briefcase"></i>
                <h3>No openings added yet</h3>
                <p>Add openings using the form above.</p>
            </div>
        `;
        return;
    }

    let html = '';
    openings.forEach(opening => {
        html += `
            <div class="item-card">
                <div class="item-header">
                    <div class="item-title">${opening.position}</div>
                    <div class="item-actions">
                        <button onclick="editOpening('${opening.id}')" class="btn btn-small btn-outline">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteOpening('${opening.id}')" class="btn btn-small btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="item-meta">${opening.type || ''} • ${opening.duration || ''} • ${opening.funding || ''}</div>
                <div class="item-description">${opening.description || ''}</div>
                ${opening.requirements && opening.requirements.length > 0 ? `
                    <div class="requirements-list">
                        <strong>Requirements:</strong>
                        <ul>
                            ${opening.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function loadResearchAreas() {
    const areas = dataManager.getResearchAreas();
    const container = document.getElementById('researchAreasList');
    
    if (!container) return; // Admin page only
    
    if (areas.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-flask"></i>
                <h3>No research areas added yet</h3>
                <p>Add research areas using the form above.</p>
            </div>
        `;
        return;
    }

    let html = '';
    areas.forEach(area => {
        html += `
            <div class="item-card">
                <div class="item-header">
                    <div class="item-title">${area.title}</div>
                    <div class="item-actions">
                        <button onclick="editResearchArea('${area.id}')" class="btn btn-small btn-outline">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteResearchArea('${area.id}')" class="btn btn-small btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="item-description">${area.description || ''}</div>
                ${area.keyPoints && area.keyPoints.length > 0 ? `
                    <div class="key-points">
                        <strong>Key Focus Areas:</strong>
                        <ul>
                            ${area.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${area.methodologies && area.methodologies.length > 0 ? `
                    <div class="methodologies">
                        <strong>Methodologies:</strong>
                        <ul>
                            ${area.methodologies.map(method => `<li>${method}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Edit functions
function editTeamMember(id) {
    const member = dataManager.getTeamMembers().find(m => m.id === id);
    if (!member) return;

    currentEditingId = id;
    
    document.getElementById('memberName').value = member.name || '';
    document.getElementById('memberRole').value = member.role || '';
    document.getElementById('memberCategory').value = member.category || '';
    document.getElementById('memberSubcategory').value = member.subcategory || '';
    document.getElementById('memberJoinDate').value = member.joinDate || '';
    document.getElementById('memberGraduationDate').value = member.graduationDate || '';
    document.getElementById('memberDescription').value = member.description || '';
    document.getElementById('memberCurrentPosition').value = member.currentPosition || '';
    document.getElementById('memberImage').value = member.image || '';
    
    // Trigger category change to show/hide fields
    document.getElementById('memberCategory').dispatchEvent(new Event('change'));
    
    // Update form button
    const submitBtn = document.querySelector('#teamMemberForm button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Team Member';
    
    // Scroll to form
    document.getElementById('teamMemberForm').scrollIntoView({ behavior: 'smooth' });
}

// Delete functions
function deleteTeamMember(id) {
    if (confirm('Are you sure you want to delete this team member?')) {
        if (dataManager.deleteTeamMember(id)) {
            showNotification('Team member deleted successfully!', 'success');
            loadTeamMembers();
            updateStatistics();
        } else {
            showNotification('Failed to delete team member', 'error');
        }
    }
}

function deletePublication(id) {
    if (confirm('Are you sure you want to delete this publication?')) {
        if (dataManager.deletePublication(id)) {
            showNotification('Publication deleted successfully!', 'success');
            loadPublications();
            updateStatistics();
        } else {
            showNotification('Failed to delete publication', 'error');
        }
    }
}

function deleteAward(id) {
    if (confirm('Are you sure you want to delete this award?')) {
        if (dataManager.deleteAward(id)) {
            showNotification('Award deleted successfully!', 'success');
            loadAwards();
            updateStatistics();
        } else {
            showNotification('Failed to delete award', 'error');
        }
    }
}

function editOpening(id) {
    const opening = dataManager.getOpenings().find(o => o.id === id);
    if (!opening) return;

    currentEditingId = id;
    
    document.getElementById('openingPosition').value = opening.position || '';
    document.getElementById('openingType').value = opening.type || '';
    document.getElementById('openingDuration').value = opening.duration || '';
    document.getElementById('openingFunding').value = opening.funding || '';
    document.getElementById('openingDescription').value = opening.description || '';
    
    // Handle requirements array
    if (opening.requirements && opening.requirements.length > 0) {
        document.getElementById('openingRequirements').value = opening.requirements.join('\n');
    }
    
    // Update form button
    const submitBtn = document.querySelector('#openingForm button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Opening';
    }
    
    // Scroll to form
    const form = document.getElementById('openingForm');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function editResearchArea(id) {
    const area = dataManager.getResearchAreas().find(a => a.id === id);
    if (!area) return;

    currentEditingId = id;
    
    document.getElementById('researchAreaTitle').value = area.title || '';
    document.getElementById('researchAreaDescription').value = area.description || '';
    
    // Handle arrays
    if (area.keyPoints && area.keyPoints.length > 0) {
        document.getElementById('researchAreaKeyPoints').value = area.keyPoints.join('\n');
    }
    if (area.methodologies && area.methodologies.length > 0) {
        document.getElementById('researchAreaMethodologies').value = area.methodologies.join('\n');
    }
    
    // Update form button
    const submitBtn = document.querySelector('#researchAreaForm button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Update Research Area';
    }
    
    // Scroll to form
    const form = document.getElementById('researchAreaForm');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function deleteOpening(id) {
    if (confirm('Are you sure you want to delete this opening?')) {
        if (dataManager.deleteOpening(id)) {
            showNotification('Opening deleted successfully!', 'success');
            loadOpenings();
            updateStatistics();
        } else {
            showNotification('Failed to delete opening', 'error');
        }
    }
}

function deleteResearchArea(id) {
    if (confirm('Are you sure you want to delete this research area?')) {
        if (dataManager.deleteResearchArea(id)) {
            showNotification('Research area deleted successfully!', 'success');
            loadResearchAreas();
            updateStatistics();
        } else {
            showNotification('Failed to delete research area', 'error');
        }
    }
}

// Reset functions
function resetTeamForm() {
    document.getElementById('teamMemberForm').reset();
    currentEditingId = null;
    
    // Reset form button
    const submitBtn = document.querySelector('#teamMemberForm button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add Team Member';
    
    // Hide conditional fields
    document.getElementById('graduationDateGroup').style.display = 'none';
    document.getElementById('currentPositionGroup').style.display = 'none';
}

function resetPublicationForm() {
    document.getElementById('publicationForm').reset();
}

function resetAwardForm() {
    document.getElementById('awardForm').reset();
}

function resetOpeningForm() {
    const form = document.getElementById('openingForm');
    if (form) {
        form.reset();
        currentEditingId = null;
        
        // Reset form button
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add Opening';
        }
    }
}

function resetResearchAreaForm() {
    const form = document.getElementById('researchAreaForm');
    if (form) {
        form.reset();
        currentEditingId = null;
        
        // Reset form button
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add Research Area';
        }
    }
}

function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
        const defaultSettings = dataManager.getDefaultSettings();
        dataManager.updateSiteSettings(defaultSettings);
        loadSettings();
        showNotification('Settings reset to default values', 'info');
    }
}

// Import/Export functions
function exportData() {
    const data = {
        teamMembers: dataManager.getTeamMembers(),
        publications: dataManager.getPublications(),
        awards: dataManager.getAwards(),
        openings: dataManager.getOpenings(),
        researchAreas: dataManager.getResearchAreas(),
        settings: dataManager.getSiteSettings(),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'admin_data_backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.teamMembers) {
                localStorage.setItem(dataManager.keys.teamMembers, JSON.stringify(data.teamMembers));
            }
            if (data.publications) {
                localStorage.setItem(dataManager.keys.publications, JSON.stringify(data.publications));
            }
            if (data.awards) {
                localStorage.setItem(dataManager.keys.awards, JSON.stringify(data.awards));
            }
            if (data.openings) {
                localStorage.setItem(dataManager.keys.openings, JSON.stringify(data.openings));
            }
            if (data.researchAreas) {
                localStorage.setItem(dataManager.keys.researchAreas, JSON.stringify(data.researchAreas));
            }
            if (data.settings) {
                localStorage.setItem(dataManager.keys.settings, JSON.stringify(data.settings));
            }
            
            loadAllData();
            updateStatistics();
            showNotification('Data imported successfully!', 'success');
        } catch (error) {
            showNotification('Failed to import data: Invalid file format', 'error');
        }
    };
    reader.readAsText(file);
}

// Public page display functions
function displayCurrentOpenings() {
    const openings = dataManager.getOpenings();
    const container = document.getElementById('openings-container');
    
    if (!container) return; // Only on research page
    
    if (openings.length === 0) {
        container.innerHTML = `
            <div class="no-openings">
                <div class="no-openings-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <h3>No Current Openings</h3>
                <p>We are not actively recruiting at this time, but exceptional candidates are always welcome to reach out. We regularly have opportunities for:</p>
                <ul style="text-align: left; max-width: 500px; margin: 0 auto var(--spacing-lg) auto; color: #555;">
                    <li>PhD students in Transportation Engineering</li>
                    <li>Postdoctoral researchers in Connected Vehicles</li>
                    <li>Research interns in Smart City Technologies</li>
                    <li>Collaborative research projects</li>
                </ul>
                <p style="font-style: italic; color: var(--iitb-accent);">Feel free to send your CV and research interests for future opportunities.</p>
                <a href="contact.html" class="btn btn-primary">
                    <i class="fas fa-envelope"></i>
                    Contact Us
                </a>
            </div>
        `;
        return;
    }

    let html = '<div class="openings-grid">';
    openings.forEach(opening => {
        html += `
            <div class="opening-card">
                <div class="opening-header">
                    <h3 class="opening-title">${opening.position}</h3>
                    <div class="opening-badges">
                        <span class="opening-badge duration">${opening.duration}</span>
                        <span class="opening-badge funding">${opening.funding}</span>
                    </div>
                </div>
                <p class="opening-description">${opening.description}</p>
                ${opening.requirements && opening.requirements.length > 0 ? `
                    <div class="opening-requirements">
                        <h4>Requirements:</h4>
                        <ul>
                            ${opening.requirements.map(req => `<li>${req}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="opening-actions">
                    <a href="contact.html" class="btn btn-primary">
                        <i class="fas fa-envelope"></i>
                        Apply Now
                    </a>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function displayDynamicResearchAreas() {
    const areas = dataManager.getResearchAreas();
    const staticContainer = document.querySelector('.core-research-grid');
    
    if (!staticContainer || areas.length === 0) return; // Keep static content if no dynamic content
    
    // Replace static content with dynamic content
    let html = '';
    areas.forEach(area => {
        html += `
            <div class="research-domain">
                <div class="domain-header">
                    <div class="domain-icon">
                        <i class="fas fa-flask"></i>
                    </div>
                    <h3 class="domain-title">${area.title}</h3>
                </div>
                <div class="domain-content">
                    <p class="domain-description">${area.description}</p>
                    ${area.keyPoints && area.keyPoints.length > 0 ? `
                        <div class="research-topics">
                            <h4>Key Focus Areas:</h4>
                            <ul class="topics-list">
                                ${area.keyPoints.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${area.methodologies && area.methodologies.length > 0 ? `
                        <div class="methodologies">
                            <h4>Research Methodologies:</h4>
                            <ul class="methods-list">
                                ${area.methodologies.map(method => `<li>${method}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    staticContainer.innerHTML = html;
}

// Initialize research page content
function initializeResearchPage() {
    // Only run on research page
    if (window.location.pathname.includes('research.html') || window.location.pathname === '/research.html') {
        displayCurrentOpenings();
        displayDynamicResearchAreas();
    }
}

// Utility functions
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
    });
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
