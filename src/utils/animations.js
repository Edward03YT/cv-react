// src/utils/animations.js

/**
 * Funcție pentru smooth scroll către un element
 * @param {string} elementId - ID-ul elementului țintă
 * @param {number} offset - Offset în pixeli (opțional)
 */
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Funcție pentru a adăuga clase de animație cu delay
 * @param {HTMLElement} element - Elementul DOM
 * @param {string} animationClass - Clasa de animație
 * @param {number} delay - Delay în milisecunde
 */
export const addAnimationWithDelay = (element, animationClass, delay = 0) => {
  setTimeout(() => {
    if (element) {
      element.classList.add(animationClass);
    }
  }, delay);
};

/**
 * Funcție pentru animații staggered pe o listă de elemente
 * @param {NodeList} elements - Lista de elemente
 * @param {string} animationClass - Clasa de animație
 * @param {number} staggerDelay - Delay între animații
 */
export const staggerAnimation = (elements, animationClass, staggerDelay = 100) => {
  elements.forEach((element, index) => {
    addAnimationWithDelay(element, animationClass, index * staggerDelay);
  });
};

/**
 * Funcție pentru a verifica dacă animațiile sunt preferate
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Funcție pentru a aplica animații doar dacă sunt permise
 * @param {Function} animationFunction - Funcția de animație
 */
export const safeAnimate = (animationFunction) => {
  if (!prefersReducedMotion()) {
    animationFunction();
  }
};

/**
 * Funcție pentru fade in pe scroll
 * @param {string} selector - Selectorul CSS pentru elemente
 */
export const initScrollAnimations = (selector = '.fade-in-section') => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
  return observer;
};

/**
 * Funcție pentru typing effect
 * @param {HTMLElement} element - Elementul țintă
 * @param {string} text - Textul de tastat
 * @param {number} speed - Viteza de tastare (ms)
 */
export const typeWriter = (element, text, speed = 100) => {
  if (!element) return;
  
  let i = 0;
  element.innerHTML = '';
  
  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

/**
 * Funcție pentru counter animation
 * @param {HTMLElement} element - Elementul ce conține numărul
 * @param {number} target - Numărul țintă
 * @param {number} duration - Durata animației (ms)
 */
export const animateCounter = (element, target, duration = 2000) => {
  if (!element) return;
  
  const start = parseInt(element.textContent) || 0;
  const increment = (target - start) / (duration / 16);
  let current = start;
  
  const updateCounter = () => {
    current += increment;
    if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
      element.textContent = target;
    } else {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    }
  };
  
  updateCounter();
};

/**
 * Funcție pentru progress bar animation
 * @param {HTMLElement} progressBar - Elementul progress bar
 * @param {number} percentage - Procentajul țintă
 * @param {number} duration - Durata animației (ms)
 */
export const animateProgressBar = (progressBar, percentage, duration = 1000) => {
  if (!progressBar) return;
  
  progressBar.style.width = '0%';
  
  setTimeout(() => {
    progressBar.style.transition = `width ${duration}ms ease-out`;
    progressBar.style.width = `${percentage}%`;
  }, 100);
};

/**
 * Funcție pentru reveal animation cu direction
 * @param {HTMLElement} element - Elementul de animat
 * @param {string} direction - Direcția ('left', 'right', 'up', 'down')
 */
export const revealElement = (element, direction = 'up') => {
  if (!element) return;
  
  const animations = {
    up: 'animate-slideInUp',
    down: 'animate-slideInDown',
    left: 'animate-slideInLeft',
    right: 'animate-slideInRight'
  };
  
  element.classList.add(animations[direction] || animations.up);
};

/**
 * Funcție pentru parallax effect
 * @param {string} selector - Selectorul pentru elementele parallax
 * @param {number} speed - Viteza parallax (0-1)
 */
export const initParallx = (selector = '.parallax', speed = 0.5) => {
  const elements = document.querySelectorAll(selector);
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    elements.forEach(element => {
      const rate = scrolled * -speed;
      element.style.transform = `translateY(${rate}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Funcție pentru mouse hover tilt effect
 * @param {HTMLElement} element - Elementul de aplicat efectul
 * @param {number} intensity - Intensitatea efectului (grad)
 */
export const addTiltEffect = (element, intensity = 10) => {
  if (!element) return;
  
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((centerX - x) / centerX) * intensity;
    
    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Funcție pentru a reseta toate animațiile
 * @param {string} selector - Selectorul pentru elemente
 */
export const resetAnimations = (selector = '[class*="animate-"]') => {
  document.querySelectorAll(selector).forEach(element => {
    const classList = Array.from(element.classList);
    classList.forEach(className => {
      if (className.startsWith('animate-')) {
        element.classList.remove(className);
      }
    });
  });
};

/**
 * Funcție pentru lazy loading cu animație
 * @param {string} selector - Selectorul pentru imagini
 */
export const initLazyLoading = (selector = 'img[data-src]') => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll(selector).forEach(img => {
    img.classList.add('loading');
    imageObserver.observe(img);
  });
  
  return imageObserver;
};