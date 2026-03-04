/**
 * LogoIcon.tsx — Bold phone app icon checkmark
 * Striking, prominent design for app launcher
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

      {/* Bold, prominent checkmark - app icon style */}
      {/* Left diagonal of checkmark - thick and commanding */}
      <line
        x1="25"
        y1="55"
        x2="42"
        y2="72"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right diagonal of checkmark - bold upward sweep */}
      <line
        x1="42"
        y1="72"
        x2="80"
        y2="18"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
