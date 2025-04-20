// Animation utilities for enhanced user experience

// Function to handle scroll animations
export const initScrollAnimations = () => {
  const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');
  
  const handleScrollAnimation = () => {
    scrollTriggerElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      // Element is in viewport
      if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  };
  
  // Initial check on page load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
};

// Function to handle parallax effect
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleParallax = () => {
    parallaxElements.forEach(element => {
      const scrollPosition = window.pageYOffset;
      const speed = element.getAttribute('data-speed') || 0.1;
      
      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleParallax);
};

// Function to handle text reveal animations
export const initTextReveal = () => {
  const textRevealElements = document.querySelectorAll('.text-reveal');
  
  textRevealElements.forEach(element => {
    const text = element.textContent || '';
    element.textContent = '';
    
    // Create spans for each character
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * 0.03}s`;
      element.appendChild(span);
    });
    
    // Add observer to trigger animation when element is in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(element);
  });
};

// Function to handle ripple effect for buttons
export const initRippleEffect = () => {
  const rippleButtons = document.querySelectorAll('.ripple-effect');
  
  rippleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      // Remove ripple element after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

// Function to handle scroll-to-top button visibility
export const initScrollToTopButton = () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  }
};

// Function to initialize all animations
export const initAllAnimations = () => {
  initScrollAnimations();
  initParallax();
  initTextReveal();
  initRippleEffect();
  initScrollToTopButton();
};

// Function to add grain texture to elements
export const addGrainTexture = () => {
  const grainElements = document.querySelectorAll('.add-grain');
  
  grainElements.forEach(element => {
    element.classList.add('texture-grain');
  });
};

// Function to handle form validation with elegant error messages
export const initFormValidation = () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('invalid', (e) => {
        e.preventDefault();
        
        // Add error class to parent element
        input.parentElement?.classList.add('error');
        
        // Create error message if it doesn't exist
        if (!input.parentElement?.querySelector('.error-message')) {
          const errorMessage = document.createElement('div');
          errorMessage.classList.add('error-message');
          errorMessage.textContent = input.validationMessage;
          input.parentElement?.appendChild(errorMessage);
        }
      });
      
      // Remove error on input
      input.addEventListener('input', () => {
        input.parentElement?.classList.remove('error');
        const errorMessage = input.parentElement?.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.remove();
        }
      });
    });
  });
};
