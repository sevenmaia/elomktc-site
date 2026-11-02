"use strict";
"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 650,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 300) {
      setIsVisible(true);
    }

    // Safety fallback: ensure content is always visible after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900);

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 32px, 0)";
      case "fade-down":
        return "translate3d(0, -32px, 0)";
      case "fade-left":
        return "translate3d(32px, 0, 0)";
      case "fade-right":
        return "translate3d(-32px, 0, 0)";
      case "zoom-in":
        return "translate3d(0, 20px, 0) scale(0.96)";
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
