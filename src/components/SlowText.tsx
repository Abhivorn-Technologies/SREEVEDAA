"use client";
import React, { useEffect, useRef, useState } from "react";

interface SlowTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  el?: keyof React.JSX.IntrinsicElements;
}

export function SlowText({ 
  text, 
  className = "", 
  delay = 0,
  wordDelay = 80,
  el: Wrapper = "span" 
}: SlowTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  const Component: any = Wrapper;

  return (
    <Component ref={ref} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.4em] -mb-[0.4em] pt-[0.2em] -mt-[0.2em]">
          <span
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              transitionProperty: "opacity, transform",
              transitionDuration: "1200ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${delay + i * wordDelay}ms`,
            }}
          >
            {word}
            {i !== words.length - 1 && "\u00A0"}
          </span>
        </span>
      ))}
    </Component>
  );
}
// Force cache bust
