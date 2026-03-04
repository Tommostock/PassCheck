/**
 * LogoIcon.tsx — Sleek, futuristic checkmark logo
 * Solitary minimalist tick with no container
 */

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient from cyan to green */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
      </defs>

      {/* Sleek, futuristic checkmark - curved strokes for modern feel */}
      {/* Left curve of checkmark */}
      <path
        d="M 28 54 Q 38 62 45 55"
        stroke="url(#logoGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right curve of checkmark - elegant sweep upward */}
      <path
        d="M 45 55 Q 65 35 78 20"
        stroke="url(#logoGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
