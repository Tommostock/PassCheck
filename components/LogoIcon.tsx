/**
 * LogoIcon.tsx — Bold checkmark flanked by double asterisks
 * * * ✓ * * design
 */

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 240 100"
      width="120"
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

      {/* Outer-left asterisk */}
      <text x="20"  y="72" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.5">*</text>

      {/* Inner-left asterisk */}
      <text x="60"  y="72" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.75">*</text>

      {/* Bold checkmark — centred */}
      <line x1="98"  y1="54" x2="116" y2="74"
        stroke="url(#logoGradient)" strokeWidth="18"
        strokeLinecap="round" strokeLinejoin="round" />
      <line x1="116" y1="74" x2="152" y2="20"
        stroke="url(#logoGradient)" strokeWidth="18"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Inner-right asterisk */}
      <text x="180" y="72" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.75">*</text>

      {/* Outer-right asterisk */}
      <text x="220" y="72" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.5">*</text>
    </svg>
  );
}
