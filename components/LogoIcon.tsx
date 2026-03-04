/**
 * LogoIcon.tsx — App logo for PassCheck
 * Original flowing checkmark design for password validation
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

        {/* Glow effect for depth */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer circle with gradient border - modern style */}
      <circle
        cx="64"
        cy="64"
        r="58"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        opacity="0.25"
      />

      {/* Original flowing checkmark with curved, organic stroke */}
      <g filter="url(#glow)">
        {/* Curved left portion - swinging upward with momentum */}
        <path
          d="M 38 72 Q 48 84 54 78"
          stroke="url(#logoGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Curved right portion - sweeping stroke with varied width via transform-origin */}
        <path
          d="M 54 78 Q 72 56 96 38"
          stroke="url(#logoGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />

        {/* Subtle accent spark - small flowing line near endpoint for originality */}
        <path
          d="M 88 46 Q 98 38 104 32"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
          fill="none"
        />
      </g>
    </svg>
  );
}
