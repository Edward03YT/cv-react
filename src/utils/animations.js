


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


export const addAnimationWithDelay = (element, animationClass, delay = 0) => {
  setTimeout(() => {
    if (element) {
      element.classList.add(animationClass);
    }
  }, delay);
};


export const staggerAnimation = (elements, animationClass, staggerDelay = 100) => {
  elements.forEach((element, index) => {
    addAnimationWithDelay(element, animationClass, index * staggerDelay);
  });
};


export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};


export const safeAnimate = (animationFunction) => {
  if (!prefersReducedMotion()) {
    animationFunction();
  }
};


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


export const animateProgressBar = (progressBar, percentage, duration = 1000) => {
  if (!progressBar) return;
  
  progressBar.style.width = '0%';
  
  setTimeout(() => {
    progressBar.style.transition = `width ${duration}ms ease-out`;
    progressBar.style.width = `${percentage}%`;
  }, 100);
};


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