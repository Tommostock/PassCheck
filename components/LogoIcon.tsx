/**
 * LogoIcon.tsx — App logo for PassCheck
 * Modern checkmark that protrudes from circular container
 */

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
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

        {/* Subtle shadow for depth */}
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Circular container - subtle background */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        opacity="0.2"
      />

      {/* Clean, modern checkmark that protrudes beyond the circle */}
      <g filter="url(#shadow)">
        {/* Left diagonal stroke of checkmark */}
        <line
          x1="32"
          y1="52"
          x2="46"
          y2="66"
          stroke="url(#logoGradient)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right diagonal stroke - extends upward and beyond circle boundary */}
        <line
          x1="46"
          y1="66"
          x2="78"
          y2="30"
          stroke="url(#logoGradient)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
