import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = [
    'Frontend Engineer',
    'Full-stack Engineer',
    'JavaScript Master',
    'TypeScript Wizard',
    'UI/UX Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const nextRole = roles[roleIndex];
      const currentLength = displayedRole.length;

      if (currentLength < nextRole.length) {
        timeout = setTimeout(() => {
          setDisplayedRole(nextRole.substring(0, currentLength + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      const currentLength = displayedRole.length;

      if (currentLength > 0) {
        timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.substring(0, currentLength - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          const nextIndex = (roleIndex + 1) % roles.length;
          setRoleIndex(nextIndex);
          setIsTyping(true);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, roleIndex, isTyping, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" id="about">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]"></div>

      <div
        className={`container max-w-5xl mx-auto pt-24 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center md:text-left">
          <AnimatedText
            text="Hello, I'm"
            className="text-muted-foreground mb-2 font-mono text-lg"
            animation="fade-in-up"
            tag="p"
          />

          <AnimatedText
            text="Sagun Karanjit"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            animation="fade-in-up"
            tag="h1"
            delay={200}
          />

          <div className="h-12 mb-8 overflow-hidden">
            <div className="font-mono text-xl md:text-2xl text-primary flex items-center justify-center md:justify-start">
              <span className="mr-2">&gt;</span>
              <span>{displayedRole}</span>
              <span className="inline-block w-2 h-6 bg-primary animate-[pulse_1s_infinite] ml-1"></span>
            </div>
          </div>

          <AnimatedText
            text="I craft elegant interfaces and deliver exceptional user experiences with clean, efficient code."
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-12 text-balance"
            animation="fade-in-up"
            tag="p"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
