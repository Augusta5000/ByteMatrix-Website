// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Scroll-to-top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
const nameInput = document.querySelector('.contact input[placeholder="Your Name"]');
const emailInput = document.querySelector('.contact input[placeholder="Your Email"]');
const messageInput = document.querySelector('.contact textarea');
const submitButton = document.querySelector('.contact button');

function setError(input, message) {
  let error = input.parentElement.querySelector('.error-msg');
  if (!error) {
    error = document.createElement('div');
    error.className = 'error-msg';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.9rem';
    error.style.marginTop = '4px';
    input.parentElement.appendChild(error);
  }
  error.textContent = message;
}

function clearError(input) {
  let error = input.parentElement.querySelector('.error-msg');
  if (error) error.textContent = '';
}

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    clearError(input);
    let success = document.querySelector('.success-msg');
    if (success) success.textContent = '';
  });
});

submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  let valid = true;

  clearError(nameInput);
  clearError(emailInput);
  clearError(messageInput);

  if (!nameInput.value.trim()) {
    setError(nameInput, 'Please enter your name.');
    valid = false;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value.trim())) {
    setError(emailInput, 'Please enter a valid email.');
    valid = false;
  }

  if (!messageInput.value.trim()) {
    setError(messageInput, 'Please enter your message.');
    valid = false;
  }

  if (!valid) return;

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  setTimeout(() => {
    let success = document.querySelector('.success-msg');
    if (!success) {
      success = document.createElement('div');
      success.className = 'success-msg';
      success.style.color = '#27ae60';
      success.style.fontWeight = '600';
      success.style.marginTop = '10px';
      success.style.fontSize = '1rem';
      success.textContent = 'Thank you! Your message has been sent.';
      document.querySelector('.contact').appendChild(success);
    } else {
      success.textContent = 'Thank you! Your message has been sent.';
    }

    submitButton.textContent = 'Send Message';
    submitButton.disabled = false;

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    setTimeout(() => {
      if (success) success.textContent = '';
    }, 4000);
  }, 1200);
});
