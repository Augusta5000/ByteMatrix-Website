// API Base URL
const API_BASE_URL = 'http://localhost:5000/api';

// Contact Form Handler
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        contactForm.classList.add('loading');

        // Remove any existing messages
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const formData = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#message').value
        };

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-message form-success';
                successMessage.textContent = 'Message sent successfully! We\'ll get back to you soon.';
                contactForm.appendChild(successMessage);
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-message form-error';
            errorMessage.textContent = error.message || 'Failed to send message. Please try again.';
            contactForm.appendChild(errorMessage);
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            contactForm.classList.remove('loading');
        }
    });
}

// Portfolio Items Loader
async function loadPortfolioItems() {
    try {
        const response = await fetch(`${API_BASE_URL}/portfolio`);
        const items = await response.json();
        
        const portfolioGrid = document.querySelector('.services-grid');
        if (portfolioGrid) {
            items.forEach(item => {
                const portfolioItem = createPortfolioItem(item);
                portfolioGrid.appendChild(portfolioItem);
            });
        }
    } catch (error) {
        console.error('Error loading portfolio items:', error);
    }
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'service-card';
    div.innerHTML = `
        <div class="service-image">${item.imageUrl}</div>
        <div class="service-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="#contact" class="service-link">Learn More →</a>
        </div>
    `;
    return div;
}

// Testimonials Loader
async function loadTestimonials() {
    try {
        const response = await fetch(`${API_BASE_URL}/testimonials`);
        const testimonials = await response.json();
        
        const testimonialGrid = document.querySelector('.testimonials-grid');
        if (testimonialGrid) {
            testimonials.forEach(testimonial => {
                const testimonialCard = createTestimonialCard(testimonial);
                testimonialGrid.appendChild(testimonialCard);
            });
        }
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

function createTestimonialCard(testimonial) {
    const div = document.createElement('div');
    div.className = 'testimonial-card';
    div.innerHTML = `
        <p class="testimonial-text">${testimonial.testimonial}</p>
        <div class="testimonial-author">
            <div class="author-avatar">${testimonial.avatar || testimonial.name.charAt(0)}</div>
            <div class="author-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.position}</p>
            </div>
        </div>
    `;
    return div;
}

// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioItems();
    loadTestimonials();
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .service-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});