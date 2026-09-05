import { gsap } from './gsapConfig';

export const initFadeUp = (selector: string | HTMLElement, delay: number = 0) => {
  if (typeof window === 'undefined') return;

  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%', // Inicia la animación cuando el elemento entra al 85% del viewport
        toggleActions: 'play none none none',
      },
    }
  );
};