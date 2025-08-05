// Sample Properties Data
const properties = [
    {
        id: 1,
        title: "Luxury Villa Paradise",
        location: "Whitefield, Bangalore",
        price: 25000000,
        type: "villa",
        bedrooms: 4,
        bathrooms: 3,
        area: "3500 sq ft",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Featured",
        description: "Stunning luxury villa with modern amenities and beautiful garden views."
    },
    {
        id: 2,
        title: "Modern Penthouse",
        location: "Koramangala, Bangalore",
        price: 18000000,
        type: "penthouse",
        bedrooms: 3,
        bathrooms: 2,
        area: "2800 sq ft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "New",
        description: "Contemporary penthouse with panoramic city views and premium finishes."
    },
    {
        id: 3,
        title: "Elegant Apartment",
        location: "Indiranagar, Bangalore",
        price: 12000000,
        type: "apartment",
        bedrooms: 3,
        bathrooms: 2,
        area: "2200 sq ft",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Hot Deal",
        description: "Spacious apartment in prime location with excellent connectivity."
    },
    {
        id: 4,
        title: "Garden Villa Estate",
        location: "HSR Layout, Bangalore",
        price: 32000000,
        type: "villa",
        bedrooms: 5,
        bathrooms: 4,
        area: "4200 sq ft",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Premium",
        description: "Exclusive villa with private garden and swimming pool facilities."
    },
    {
        id: 5,
        title: "Sky High Penthouse",
        location: "UB City, Bangalore",
        price: 45000000,
        type: "penthouse",
        bedrooms: 4,
        bathrooms: 3,
        area: "3800 sq ft",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Luxury",
        description: "Ultra-luxury penthouse with private terrace and 360-degree city views."
    },
    {
        id: 6,
        title: "Cozy Family Apartment",
        location: "Jayanagar, Bangalore",
        price: 8500000,
        type: "apartment",
        bedrooms: 2,
        bathrooms: 2,
        area: "1800 sq ft",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Affordable",
        description: "Perfect family home with modern amenities and peaceful surroundings."
    },
    {
        id: 7,
        title: "Royal Heritage Villa",
        location: "Richmond Town, Bangalore",
        price: 28000000,
        type: "villa",
        bedrooms: 4,
        bathrooms: 3,
        area: "3200 sq ft",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Heritage",
        description: "Beautiful heritage-style villa with classic architecture and modern comforts."
    },
    {
        id: 8,
        title: "Executive Penthouse",
        location: "Brigade Road, Bangalore",
        price: 22000000,
        type: "penthouse",
        bedrooms: 3,
        bathrooms: 2,
        area: "2600 sq ft",
        image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Executive",
        description: "Sophisticated penthouse in the heart of the city with premium amenities."
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('karthikHomesCart')) || [];

// DOM Elements
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const propertiesGrid = document.getElementById('propertiesGrid');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    renderProperties();
    updateCartUI();
    setupEventListeners();
    setupScrollAnimations();
    setupMobileMenu();
}

// Render Properties
function renderProperties(filter = 'all') {
    const filteredProperties = filter === 'all' 
        ? properties 
        : properties.filter(property => property.type === filter);
    
    propertiesGrid.innerHTML = filteredProperties.map(property => `
        <div class="property-card fade-in" data-type="${property.type}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}" loading="lazy">
                <div class="property-badge">${property.badge}</div>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area}</span>
                </div>
                <div class="property-price">₹${formatPrice(property.price)}</div>
                <div class="property-buttons">
                    <button class="btn-primary" onclick="addToCart(${property.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-secondary" onclick="viewDetails(${property.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Trigger animations
    setTimeout(() => {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

// Format price for display
function formatPrice(price) {
    if (price >= 10000000) {
        return (price / 10000000).toFixed(1) + ' Cr';
    } else if (price >= 100000) {
        return (price / 100000).toFixed(0) + ' L';
    }
    return price.toLocaleString();
}

// Add to Cart functionality
function addToCart(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const existingItem = cart.find(item => item.id === propertyId);
    
    if (existingItem) {
        showNotification('Property already in cart!', 'warning');
        return;
    }

    cart.push({
        id: property.id,
        title: property.title,
        price: property.price,
        image: property.image,
        location: property.location
    });

    localStorage.setItem('karthikHomesCart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Property added to cart!', 'success');
}

// Remove from Cart
function removeFromCart(propertyId) {
    cart = cart.filter(item => item.id !== propertyId);
    localStorage.setItem('karthikHomesCart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Property removed from cart!', 'info');
}

// Update Cart UI
function updateCartUI() {
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p>Add some properties to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${formatPrice(item.price)}</div>
                <small>${item.location}</small>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = formatPrice(total);
}

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const message = `Thank you for your interest! You have selected ${cart.length} properties worth ₹${formatPrice(total)}. Our team will contact you shortly to discuss the next steps.`;
    
    showNotification(message, 'success', 5000);
    
    // Clear cart after checkout
    setTimeout(() => {
        cart = [];
        localStorage.setItem('karthikHomesCart', JSON.stringify(cart));
        updateCartUI();
        toggleCart();
    }, 2000);
}

// View Details functionality
function viewDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.createElement('div');
    modal.className = 'property-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${property.title}</h2>
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <img src="${property.image}" alt="${property.title}" class="modal-image">
                <div class="modal-info">
                    <div class="modal-price">₹${formatPrice(property.price)}</div>
                    <div class="modal-location">
                        <i class="fas fa-map-marker-alt"></i> ${property.location}
                    </div>
                    <div class="modal-features">
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.bedrooms} Bedrooms</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Bathrooms</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                    </div>
                    <p class="modal-description">${property.description}</p>
                    <div class="modal-buttons">
                        <button class="btn-primary" onclick="addToCart(${property.id}); closeModal();">
                            Add to Cart
                        </button>
                        <button class="btn-secondary" onclick="contactUs('${property.title}')">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Add modal styles
    if (!document.getElementById('modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .property-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
            }
            .modal-content {
                background: white;
                border-radius: 15px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
                z-index: 1;
            }
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid #ecf0f1;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #7f8c8d;
            }
            .modal-body {
                padding: 20px;
            }
            .modal-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .modal-price {
                font-size: 2rem;
                font-weight: 700;
                color: #e74c3c;
                margin-bottom: 10px;
            }
            .modal-location {
                color: #7f8c8d;
                margin-bottom: 20px;
                font-size: 1.1rem;
            }
            .modal-features {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
                flex-wrap: wrap;
            }
            .feature {
                display: flex;
                align-items: center;
                gap: 8px;
                color: #7f8c8d;
            }
            .modal-description {
                line-height: 1.6;
                margin-bottom: 20px;
                color: #2c3e50;
            }
            .modal-buttons {
                display: flex;
                gap: 10px;
            }
            @media (max-width: 768px) {
                .modal-features {
                    flex-direction: column;
                    gap: 10px;
                }
                .modal-buttons {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

function closeModal() {
    const modal = document.querySelector('.property-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Contact Us functionality
function contactUs(propertyTitle = '') {
    const message = propertyTitle 
        ? `I'm interested in ${propertyTitle}. Please provide more details.`
        : 'I would like to know more about your properties.';
    
    const phone = '+919876543210';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Filter functionality
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter properties
            const filter = this.getAttribute('data-filter');
            renderProperties(filter);
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Smooth scrolling for navigation
function scrollToProperties() {
    document.getElementById('properties').scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Notification system
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add notification styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                z-index: 4000;
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 400px;
                min-width: 300px;
                animation: slideIn 0.3s ease;
            }
            .notification-success { border-left: 4px solid #27ae60; }
            .notification-error { border-left: 4px solid #e74c3c; }
            .notification-warning { border-left: 4px solid #f39c12; }
            .notification-info { border-left: 4px solid #3498db; }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #7f8c8d;
                margin-left: 10px;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    min-width: auto;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    document.body.appendChild(notification);

    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
        if (document.querySelector('.property-modal')) {
            closeModal();
        }
    }
});

// Search functionality (can be extended)
function searchProperties(query) {
    const filteredProperties = properties.filter(property => 
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase())
    );
    
    propertiesGrid.innerHTML = filteredProperties.map(property => `
        <!-- Property card HTML here -->
    `).join('');
}

// Performance optimization - Lazy loading images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}