/**
 * LogoIcon.tsx — App logo for PassCheck
 * Bold, iconic checkmark design for password validation
 */

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient from cyan to green (matching PassCheck theme) */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="#00FF88" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle border - subtle */}
      <circle
        cx="64"
        cy="64"
        r="58"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Bold checkmark - the main focal point */}
      <g filter="url(#glow)">
        {/* Left part of checkmark (short stroke from lower-left going right-up) */}
        <polyline
          points="44,68 56,80"
          stroke="url(#logoGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Right part of checkmark (long stroke from middle going upper-right) */}
        <polyline
          points="56,80 90,42"
          stroke="url(#logoGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
