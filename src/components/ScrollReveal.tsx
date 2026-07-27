"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in" | "scale-up" | "blur-in";
  delay?: number;
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  className = "", 
  animation = "fade-in-up", 
  delay = 0,
  duration = 1000
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationStyles = () => {
    switch (animation) {
      case "fade-in-up":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        };
      case "scale-up":
        return {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
        };
      case "blur-in":
        return {
          opacity: isVisible ? 1 : 0,
          filter: isVisible ? "blur(0px)" : "blur(10px)",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        };
      case "fade-in":
      default:
        return {
          opacity: isVisible ? 1 : 0,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationStyles(),
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
