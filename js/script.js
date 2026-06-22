// ============================================================
// PORTFOLIO JAVASCRIPT - SECURE & PROFESSIONAL
// ============================================================

// ============================================================
// 1. MOBILE MENU TOGGLE
// ============================================================
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ============================================================
// 2. STICKY NAVBAR & SCROLL SPY
// ============================================================
const header = document.querySelector('header');
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  // Sticky navbar
  header.classList.toggle('sticky', window.scrollY > 100);

  // Scroll spy - highlight active section
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

// ============================================================
// 3. SCROLL REVEAL ANIMATION
// ============================================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});

// ============================================================
// 4. CONTACT FORM HANDLING (SECURE)
// ============================================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // Show loading state
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // OPTION 1: RECOMMENDED - Use FormSubmit (No backend needed)
      // https://formsubmit.co/
      // Replace with your email:
      const response = await fetch('https://formsubmit.co/ajax/Saiprasanth533@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        showMessage('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
      } else {
        showMessage('✗ Failed to send message. Please try again.', 'error');
      }

      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('✗ Error sending message. Please try again later.', 'error');
      submitBtn.disabled = false;
    }
  });
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    formMessage.className = 'form-message';
    formMessage.textContent = '';
  }, 5000);
}

// ============================================================
// 5. FORM VALIDATION
// ============================================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
  // Real-time validation feedback
  input.addEventListener('blur', validateInput);
  input.addEventListener('focus', () => {
    input.style.borderColor = 'var(--accent)';
  });
});

function validateInput(e) {
  const input = e.target;
  let isValid = true;
  let message = '';

  if (input.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(input.value);
    message = isValid ? '' : 'Please enter a valid email';
  } else if (input.value.trim() === '') {
    isValid = false;
    message = 'This field is required';
  }

  if (!isValid) {
    input.style.borderColor = '#ef4444';
    input.parentElement.setAttribute('data-error', message);
  } else {
    input.style.borderColor = 'var(--border)';
    input.parentElement.removeAttribute('data-error');
  }

  return isValid;
}

// ============================================================
// 6. SMOOTH SCROLL BEHAVIOR
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================================
// 7. SKILL CARD HOVER EFFECTS (Optional)
// ============================================================
const skillCards = document.querySelectorAll('.skill');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.animation = 'pulse 0.6s ease';
  });
});

// ============================================================
// 8. PROJECT CARD INTERACTIONS
// ============================================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', function() {
    this.style.zIndex = '1';
  });
});

// ============================================================
// 9. PAGE LOAD ANIMATIONS
// ============================================================
window.addEventListener('load', () => {
  // Animate hero section on load
  const heroElements = document.querySelectorAll('.hero h1, .hero h3, .hero p, .actions');
  
  heroElements.forEach((el, index) => {
    el.style.animation = `slideInUp 0.8s ease ${index * 0.2}s forwards`;
    el.style.opacity = '0';
  });

  // Trigger reveal animations
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('show');
    });
  }, 500);
});

// ============================================================
// 10. PERFORMANCE OPTIMIZATION
// ============================================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize scroll event
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Scroll animations handled above
      ticking = false;
    });
    ticking = true;
  }
});

// ============================================================
// 11. DARK MODE TOGGLE (OPTIONAL - Can be added if desired)
// ============================================================
// Uncomment to add dark/light mode toggle
/*
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}
*/

// ============================================================
// 12. UTILITY FUNCTIONS
// ============================================================

// Copy to clipboard function (for code snippets)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showMessage('✓ Copied to clipboard!', 'success');
  });
}

// Log performance metrics
window.addEventListener('load', () => {
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  console.log(`Page load time: ${pageLoadTime}ms`);
});

// ============================================================
// 13. ERROR HANDLING
// ============================================================
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Can be used for error tracking (e.g., Sentry)
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// ============================================================
// 14. ACCESSIBILITY IMPROVEMENTS
// ============================================================

// Add keyboard navigation for modals/dropdowns
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navLinks.classList.remove('active');
  }
});

// Focus management
document.querySelectorAll('a, button, input, textarea').forEach(element => {
  element.addEventListener('focus', function() {
    this.style.outline = `2px solid var(--accent)`;
    this.style.outlineOffset = '2px';
  });

  element.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

// ============================================================
// 15. ANALYTICS (Optional)
// ============================================================
// Track section views
function trackSection(sectionId) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'view_section', {
      'section_name': sectionId
    });
  }
}

// ============================================================
// END OF SCRIPT
// ============================================================
console.log('Portfolio loaded successfully ✓');
