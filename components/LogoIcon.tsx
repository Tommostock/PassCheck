/**
 * LogoIcon.tsx — Scaled asterisks converging on a bold tick
 * Sizes scale up outer → inner → tick for visual depth
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
          <stop offset="0%" stopColor="#11b67a" />
          <stop offset="100%" stopColor="#006a4d" />
        </linearGradient>
      </defs>

      {/* Outer-left asterisk — smallest, most faded */}
      <text x="18"  y="70" fontSize="36" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.4">*</text>

      {/* Inner-left asterisk — medium, slightly brighter */}
      <text x="58"  y="74" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">*</text>

      {/* Bold checkmark — largest, full opacity, focal point */}
      <line x1="98"  y1="54" x2="116" y2="74"
        stroke="url(#logoGradient)" strokeWidth="18"
        strokeLinecap="round" strokeLinejoin="round" />
      <line x1="116" y1="74" x2="152" y2="20"
        stroke="url(#logoGradient)" strokeWidth="18"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Inner-right asterisk — medium, slightly brighter */}
      <text x="182" y="74" fontSize="52" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">*</text>

      {/* Outer-right asterisk — smallest, most faded */}
      <text x="222" y="70" fontSize="36" fontWeight="700" fill="url(#logoGradient)"
        textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.4">*</text>
    </svg>
  );
}
