/**
 * Icons.tsx — Plain white SVG icons to replace emojis
 * All icons use currentColor so they inherit from their parent
 */

const s = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none' as const,
  stroke: 'currentColor' as const, strokeWidth: 2, strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const };

export function LockIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function SwordsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" y1="19" x2="19" y2="13" />
      <line x1="16" y1="16" x2="20" y2="20" />
      <line x1="19" y1="21" x2="21" y2="19" />
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <line x1="5" y1="14" x2="9" y2="18" />
      <line x1="7" y1="21" x2="3" y2="17" />
    </svg>
  );
}

export function LightningIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function BookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function ShuffleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

export function LaptopIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function GlobeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function SkullIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <circle cx="12" cy="10" r="7" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M9 17v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1" />
      <path d="M9 17h6" />
    </svg>
  );
}

export function ShieldIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function KeyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...s} width={size} height={size}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}
