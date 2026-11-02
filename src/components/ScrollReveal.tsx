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
  duration = 500,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to visible on SSR and initial load so content is never blank
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If user prefers reduced motion, always stay visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    // If element is already in the viewport, keep visible immediately
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return;
    }

    // Only animate elements that are below the initial viewport fold
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 24px, 0)";
      case "fade-down":
        return "translate3d(0, -24px, 0)";
      case "fade-left":
        return "translate3d(24px, 0, 0)";
      case "fade-right":
        return "translate3d(-24px, 0, 0)";
      case "zoom-in":
        return "translate3d(0, 16px, 0) scale(0.97)";
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
