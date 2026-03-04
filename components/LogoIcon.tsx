/**
 * LogoIcon.tsx — Bold phone app icon checkmark with flanking asterisks
 * * ✓ * design
 */

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 160 100"
      width="80"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5FF" />
          <stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
      </defs>

      {/* Left asterisk */}
      <text
        x="16"
        y="68"
        fontSize="38"
        fontWeight="700"
        fill="url(#logoGradient)"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        opacity="0.85"
      >
        *
      </text>

      {/* Bold checkmark — centred between asterisks */}
      <line
        x1="58"
        y1="55"
        x2="75"
        y2="72"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="75"
        y1="72"
        x2="113"
        y2="18"
        stroke="url(#logoGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right asterisk */}
      <text
        x="144"
        y="68"
        fontSize="38"
        fontWeight="700"
        fill="url(#logoGradient)"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        opacity="0.85"
      >
        *
      </text>
    </svg>
  );
}
