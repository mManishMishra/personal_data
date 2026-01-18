// app/components/FallingPetals.tsx
"use client";
import React, { useEffect, useState } from "react";

export const FallingPetals = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 20 }));
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        
        return (
          <div
            key={i}
            className="absolute text-rose-500/60 text-2xl"
            style={{
              left: `${left}%`,
              top: -50,
              // Pure CSS Animation -> No Runtime Error
              animation: `fall ${duration}s linear ${delay}s infinite`,
              textShadow: "0 2px 4px rgba(255,100,100,0.2)"
            }}
          >
            ✿
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(${Math.random() * 20 - 10}vw); opacity: 0; }
        }
      `}</style>
    </div>
  );
};