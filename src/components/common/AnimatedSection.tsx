'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = styled.section<{ $isVisible: boolean }>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '50px'});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionWrapper ref={sectionRef} $isVisible={isVisible} className={className}>
      {children}
    </SectionWrapper>
  );
};
