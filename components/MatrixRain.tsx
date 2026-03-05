'use client';

import { useEffect, useState } from 'react';

export default function MatrixRain() {
  const [columns, setColumns] = useState<Array<{ id: number; chars: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random characters (0s and 1s for that matrix feel)
    const generateChars = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      let result = '';
      for (let i = 0; i < 15; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    // Create columns of falling text
    const columnsArray = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      chars: generateChars(),
      duration: 8 + Math.random() * 6, // 8-14 seconds
      delay: Math.random() * 3, // 0-3 seconds stagger
    }));

    setColumns(columnsArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient mask to fade out text behind content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" style={{ zIndex: 1 }} />

      {/* Matrix columns */}
      <div className="relative w-full h-full">
        {columns.map((col) => (
          <div
            key={col.id}
            className="absolute top-0 text-xs font-mono whitespace-pre"
            style={{
              left: `${(col.id / columns.length) * 100}%`,
              width: '2em',
              color: 'rgba(0, 255, 136, 0.15)',
              textShadow: '0 0 6px rgba(0, 255, 136, 0.2)',
              animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
              fontWeight: '700',
              letterSpacing: '0.1em',
              lineHeight: '1.2',
            }}
          >
            {col.chars}
          </div>
        ))}
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
