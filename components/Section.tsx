
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">{children}</div>
    </section>
  );
};

export default Section;
