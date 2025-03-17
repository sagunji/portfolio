
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-right' | 'fade-in-left';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  animation = 'fade-in',
  tag: Tag = 'div',
  delay = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementRef.current) {
              elementRef.current.classList.add(`animate-${animation}`);
              elementRef.current.style.opacity = '1';
            }
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (elementRef.current) {
              elementRef.current.classList.remove(`animate-${animation}`);
              elementRef.current.style.opacity = '0';
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, animation]);

  return (
    <Tag
      ref={elementRef}
      className={cn(className)}
      style={{ 
        opacity: 0, 
        animationDelay: `${delay}ms`,
        willChange: 'opacity, transform' 
      }}
    >
      {text}
    </Tag>
  );
};

export default AnimatedText;
