'use client';

import { useEffect, useState } from 'react';

export default function MatrixRain() {
  const [columns, setColumns] = useState<Array<{ id: number; chars: string; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate a vertical string of binary digits (0s and 1s)
    const generateDigits = () => {
      let result = '';
      for (let i = 0; i < 25; i++) {
        result += Math.random() > 0.5 ? '1' : '0';
        result += '\n';
      }
      return result;
    };

    // Create columns of falling text
    const columnsArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      chars: generateDigits(),
      duration: 10 + Math.random() * 8, // 10-18 seconds
      delay: -(5 + Math.random() * 10), // Negative delay so rain starts mid-waterfall, not bunched at top
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
            className="absolute top-0 text-xs font-mono whitespace-pre font-bold"
            style={{
              left: `${(col.id / columns.length) * 100}%`,
              width: '1.2em',
              color: 'rgba(0, 255, 136, 0.08)',
              textShadow: '0 0 6px rgba(0, 255, 136, 0.1)',
              animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
              lineHeight: '1.1',
              letterSpacing: '0.05em',
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
          5% {
            opacity: 1;
          }
          95% {
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
