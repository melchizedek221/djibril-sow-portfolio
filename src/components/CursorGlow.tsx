"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.left = `${pos.current.x}px`;
        glowRef.current.style.top = `${pos.current.y}px`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-0"
      style={{
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(20,184,166,0.07) 0%, rgba(20,184,166,0.03) 35%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "left 0.08s linear, top 0.08s linear",
      }}
    />
  );
}
