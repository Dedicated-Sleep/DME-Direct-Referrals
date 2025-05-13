import React, { useCallback } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  className = '',
  delay = 0,
}) => {
  const handleIntersection = useCallback((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
    }
  }, []);

  const ref = useIntersectionObserver(handleIntersection);

  return (
    <div
      ref={ref}
      className={className}
      data-animate={animation}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;