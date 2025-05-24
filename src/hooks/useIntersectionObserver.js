// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

/**
 * Hook pentru detectarea când un element devine vizibil în viewport
 * @param {Object} options - Opțiuni pentru Intersection Observer
 * @returns {Array} - [ref, isVisible]
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsVisible(isIntersecting);
        
        // O dată ce a fost vizibil, rămâne marcat
        if (isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasBeenVisible, options]);

  return [elementRef, isVisible, hasBeenVisible];
};

/**
 * Hook pentru animații staggered (întârziate)
 * @param {number} itemCount - Numărul de elemente
 * @param {number} delay - Întârzierea între animații (ms)
 * @returns {Array} - [ref, visibleItems]
 */
export const useStaggeredAnimation = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (isVisible) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, i]));
        }, i * delay);
      }
    }
  }, [isVisible, itemCount, delay]);

  return [ref, visibleItems];
};

/**
 * Hook pentru scroll progress
 * @returns {number} - Progresul scroll-ului (0-100)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(Math.max(currentProgress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * Hook pentru detectarea scroll direction
 * @returns {string} - 'up' sau 'down'
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
};