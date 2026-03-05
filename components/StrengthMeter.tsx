'use client';
/**
 * StrengthMeter.tsx — Animated password strength indicator
 *
 * Shows:
 *   - A colour-coded progress bar that fills as strength increases
 *   - The strength label (Very Weak → Very Strong)
 *   - The entropy in bits
 *   - The character set size
 */

import { motion } from 'framer-motion';
import { PasswordAnalysis } from '@/lib/analyzer';

interface Props {
  analysis: PasswordAnalysis;
}

export default function StrengthMeter({ analysis }: Props) {
  const { score, label, color, entropy, charsetSize, length } = analysis;

  const segments = 5;
  const filledSegments = Math.ceil((score / 100) * segments);
  const isVeryStrong = label === 'Very Strong';

  // Segment colours: red → orange → yellow → blue → green
  const segmentColors = ['#FF3333', '#FF8C00', '#FFD700', '#3B9EFF', '#00FF88'];
  const segmentGlows = [
    '0 0 8px 2px rgba(255,51,51,0.7)',
    '0 0 8px 2px rgba(255,140,0,0.7)',
    '0 0 8px 2px rgba(255,215,0,0.7)',
    '0 0 8px 2px rgba(59,158,255,0.7)',
    '0 0 8px 2px rgba(0,255,136,0.7)',
  ];

  return (
    <div className="space-y-3">

      {/* ── Segmented strength bar ────────────────────────── */}
      <div className="flex gap-1.5">
        {Array.from({ length: segments }).map((_, i) => {
          const isFilled = i < filledSegments;
          return isVeryStrong && isFilled ? (
            <motion.div
              key={i}
              className="h-2 flex-1 rounded-full"
              style={{
                backgroundColor: segmentColors[i],
                boxShadow: segmentGlows[i],
              }}
              animate={{
                filter: ['brightness(1)', 'brightness(1.25)', 'brightness(1)'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.18,
              }}
            />
          ) : (
            <div
              key={i}
              className="h-2 flex-1 rounded-full"
              style={{
                backgroundColor: isFilled ? segmentColors[i] : 'rgba(255,255,255,0.08)',
                boxShadow: isFilled ? segmentGlows[i] : 'none',
                display: length > 0 ? 'block' : 'none',
              }}
            />
          );
        })}
      </div>

      {/* ── Label + score ─────────────────────────────────── */}
      {length > 0 && (
        <div className="flex items-center justify-between">
          <motion.span
            className="text-sm font-semibold tracking-wider uppercase"
            style={{ color, textShadow: `0 0 10px ${color}99` }}
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            {label}
          </motion.span>
          <span className="text-xs text-[var(--text-dim)] font-mono">
            {score.toFixed(0)}/100
          </span>
        </div>
      )}

      {/* ── Stats row: entropy, charset, length ───────────── */}
      {length > 0 && (
        <motion.div
          className="grid grid-cols-3 gap-2 pt-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <StatChip label="Entropy" value={`${entropy.toFixed(1)} bits`} />
          <StatChip label="Charset" value={`${charsetSize} chars`} />
          <StatChip label="Length"  value={`${length} chars`} />
        </motion.div>
      )}
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-2 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-widest mb-0.5">{label}</div>
      <div className="text-xs font-mono text-[var(--text-primary)] font-medium">{value}</div>
    </div>
  );
}
