// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 102, 255, 0.2)';
        header.style.backgroundColor = 'rgba(10, 14, 23, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 102, 255, 0.1)';
        header.style.backgroundColor = 'rgba(10, 14, 23, 0.9)';
    }
});

// Animation for AI network nodes
document.addEventListener('DOMContentLoaded', function() {
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Create connections between nodes
    createConnections();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize contact form
    initContactForm();
});

function createConnections() {
    const nodes = document.querySelectorAll('.node');
    const network = document.querySelector('.ai-network');
    
    // Simple connections between nodes (for demo purposes)
    if (nodes.length >= 3 && network) {
        // Connection from node 1 to node 3
        const connection1 = document.createElement('div');
        connection1.className = 'connection';
        connection1.style.width = 'calc(50% - 40px)';
        connection1.style.top = '25%';
        connection1.style.left = '25%';
        connection1.style.transform = 'rotate(20deg)';
        network.appendChild(connection1);
        
        // Connection from node 2 to node 3
        const connection2 = document.createElement('div');
        connection2.className = 'connection';
        connection2.style.width = 'calc(50% - 40px)';
        connection2.style.top = '65%';
        connection2.style.left = '20%';
        connection2.style.transform = 'rotate(-15deg)';
        network.appendChild(connection2);
        
        // Connection from node 3 to node 4
        const connection3 = document.createElement('div');
        connection3.className = 'connection';
        connection3.style.width = 'calc(40% - 40px)';
        connection3.style.top = '50%';
        connection3.style.left = '50%';
        connection3.style.transform = 'rotate(30deg)';
        network.appendChild(connection3);
        
        // Connection from node 3 to node 5
        const connection4 = document.createElement('div');
        connection4.className = 'connection';
        connection4.style.width = 'calc(40% - 40px)';
        connection4.style.top = '35%';
        connection4.style.left = '50%';
        connection4.style.transform = 'rotate(-25deg)';
        network.appendChild(connection4);
    }
}

// Scroll animations for elements
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.solution-card, .case-study-card, .team-member, .tech-category, .feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize element styles
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Language Switcher
function initLanguageSwitcher() {
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-dropdown a');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
        });
        
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                changeLanguage(selectedLang);
                langDropdown.style.display = 'none';
                
                // Update button text
                langBtn.innerHTML = selectedLang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            langDropdown.style.display = 'none';
        });
    }
}

function changeLanguage(lang) {
    // This is a simplified implementation
    // In a real application, you would load translations from a file or API
    
    const translations = {
        en: {
            // Home page translations
            'hero-title': 'AI-Powered Banking Transformation',
            'hero-subtitle': 'Empowering Uzbekistan\'s financial institutions with intelligent Data Warehousing, BI, and Automated Regulatory Reporting powered by AI.',
            'cta-primary': 'Book a Diagnostic Assessment',
            'cta-secondary': 'View Our Solutions',
            // Add more translations as needed
        },
        ru: {
            // Russian translations
            'hero-title': 'Банковская трансформация на основе ИИ',
            'hero-subtitle': 'Предоставляем финансовым учреждениям Узбекистана интеллектуальные решения для хранилищ данных, бизнес-аналитики и автоматизированной регуляторной отчетности на основе ИИ.',
            'cta-primary': 'Забронировать диагностическую оценку',
            'cta-secondary': 'Посмотреть наши решения',
        },
        uz: {
            // Uzbek translations
            'hero-title': 'Sun\'iy intellekt asosidagi bank transformatsiyasi',
            'hero-subtitle': 'O\'zbekiston moliya institutlarini sun\'iy intellekt asosidagi ma\'lumotlar ombori, biznes-intellekt va avtomatlashtirilgan regulyator hisobotlari bilan kuchaytiramiz.',
            'cta-primary': 'Diagnostik baholashni bron qiling',
            'cta-secondary': 'Yechimlarimizni ko\'ring',
        }
    };
    
    // Apply translations to elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update page title
    if (translations[lang] && translations[lang]['page-title']) {
        document.title = translations[lang]['page-title'];
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav ul');
    const ctaButton = document.querySelector('.cta-button');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.display = 'none';
    
    header.querySelector('.header-container').appendChild(mobileMenuBtn);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('mobile-active');
        this.classList.toggle('active');
    });
    
    // Check screen size and toggle mobile menu visibility
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            nav.style.display = 'none';
            ctaButton.style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            nav.style.display = 'flex';
            ctaButton.style.display = 'block';
        }
    }
    
    // Initial check
    checkScreenSize();
    
    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Client logo animation
    document.querySelectorAll('.client-logo').forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Tech icon hover effects
    document.querySelectorAll('.tech-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
});