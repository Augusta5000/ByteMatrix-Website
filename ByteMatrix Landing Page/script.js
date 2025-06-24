AOS.init({
  duration: 1000,
  once: true
});

// Scroll-to-section for CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Inline error helpers
function setError(input, message) {
  let error = input.parentElement.querySelector('.error-msg');
  if (!error) {
    error = document.createElement('div');
    error.className = 'error-msg';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.95em';
    error.style.marginTop = '4px';
    input.parentElement.appendChild(error);
  }
  error.textContent = message;
}
function clearError(input) {
  let error = input.parentElement.querySelector('.error-msg');
  if (error) error.textContent = '';
}

// Contact form validation with inline errors and success message
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  const name = contactForm.querySelector('input[placeholder="Name"]');
  const email = contactForm.querySelector('input[placeholder="Email"]');
  const message = contactForm.querySelector('textarea');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  // Remove errors and success on input
  [name, email, message].forEach(input => {
    input.addEventListener('input', () => {
      clearError(input);
      let success = contactForm.querySelector('.success-msg');
      if (success) success.textContent = '';
      if (submitBtn) submitBtn.disabled = false;
    });
  });
  contactForm.addEventListener('submit', function(e) {
    let valid = true;
    clearError(name); clearError(email); clearError(message);
    if (!name.value.trim()) {
      setError(name, 'Please enter your name.');
      valid = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
      setError(email, 'Please enter a valid email.');
      valid = false;
    }
    if (!message.value.trim()) {
      setError(message, 'Please enter your message.');
      valid = false;
    }
    if (!valid) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    // Show loading spinner and disable button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.original = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    }
    setTimeout(() => {
      // Show success message
      let success = contactForm.querySelector('.success-msg');
      if (!success) {
        success = document.createElement('div');
        success.className = 'success-msg';
        success.style.color = '#27ae60';
        success.style.fontWeight = '600';
        success.style.marginTop = '10px';
        contactForm.appendChild(success);
      }
      success.textContent = 'Thank you! Your message has been sent.';
      success.classList.add('pop-success');
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtn.dataset.original || 'Send Message';
      }
      setTimeout(() => {
        if (success) success.classList.remove('pop-success');
        success.textContent = '';
      }, 4000);
    }, 1200); // Simulate sending delay
  });
}

// Service card hover effect (adds/removes a class for JS-based effect + highlight)
const serviceCards = document.querySelectorAll('.service-cards .card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Scroll-to-top button
let scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.className = 'scroll-to-top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '32px';
scrollBtn.style.right = '32px';
scrollBtn.style.padding = '12px 18px';
scrollBtn.style.fontSize = '1.5rem';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background = '#2575fc';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
