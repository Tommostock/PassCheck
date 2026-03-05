'use client';
/**
 * FeedbackPanel.tsx — Educational feedback after simulation
 *
 * After attacks complete, this panel explains:
 *   - Why the password is weak/strong
 *   - What specific vulnerabilities were found
 *   - Actionable suggestions to make it stronger
 *   - A recommended strong password example (generated fresh each time)
 */

import { motion } from 'framer-motion';
import { PasswordAnalysis } from '@/lib/analyzer';
import { BookIcon, LockIcon, AlertTriangleIcon, CheckIcon, ArrowRightIcon, WrenchIcon } from './Icons';

interface Props {
  analysis: PasswordAnalysis;
}

// ─────────────────────────────────────────────────────────
// FEEDBACK GENERATION
// Based on what analyzePassword detected, build a list of
// human-readable explanations and suggestions.
// ─────────────────────────────────────────────────────────

interface FeedbackItem {
  type: 'warning' | 'success' | 'tip';
  headline: string;
  body: string;
}

function generateFeedback(analysis: PasswordAnalysis): FeedbackItem[] {
  const items: FeedbackItem[] = [];
  const { patterns, has, length, score } = analysis;

  // ── Weaknesses ───────────────────────────────────────
  if (patterns.isCommonPassword) {
    items.push({
      type: 'warning',
      headline: 'Found in breach databases',
      body: 'Attackers always start with lists of billions of previously leaked passwords. ' +
            'This password would be cracked before the attack even begins.',
    });
  }

  if (patterns.isDictionaryWord) {
    items.push({
      type: 'warning',
      headline: 'Dictionary word detected — cracked in milliseconds',
      body: 'Sports teams, cities, names and common words appear in every real cracking ' +
            'dictionary. "Arsenal" alone appears 600,000+ times in leaked password databases. ' +
            'Even if a word is long, it has far less security than the same number of random characters, ' +
            'because attackers skip brute force entirely and go straight to their word list.',
    });
  }

  if (patterns.hasKeyboardWalk) {
    items.push({
      type: 'warning',
      headline: 'Keyboard pattern detected',
      body: 'Sequences like "qwerty", "asdfgh", "12345" follow the physical layout of a keyboard. ' +
            'All password crackers include these patterns by default.',
    });
  }

  if (patterns.hasRepeats) {
    items.push({
      type: 'warning',
      headline: 'Repeated characters reduce randomness',
      body: 'Repetitions like "aaa" or "111" make the password predictable. ' +
            'A cracker can effectively ignore the repeated part.',
    });
  }

  if (patterns.hasSequential) {
    items.push({
      type: 'warning',
      headline: 'Sequential characters detected',
      body: '"abc", "xyz", or "789" follow a predictable order. ' +
            'Attackers try all sequential patterns in their first pass.',
    });
  }

  if (patterns.hasLeetSpeak) {
    items.push({
      type: 'warning',
      headline: 'Leet speak adds almost no security',
      body: 'Substituting @ for "a", 3 for "e", or 0 for "o" is well-known to attackers. ' +
            'Modern crackers apply all leet substitutions automatically.',
    });
  }

  if (patterns.hasCommonSuffix) {
    items.push({
      type: 'warning',
      headline: 'Common suffix detected',
      body: 'Adding "123", "!", or a year to the end of a password is the most common user trick. ' +
            'Attackers always try these. It gives a false sense of security.',
    });
  }

  if (patterns.hasOnlyLowercase) {
    items.push({
      type: 'warning',
      headline: 'Lowercase only — character set too small',
      body: 'Using only lowercase letters limits you to 26 possible characters per position. ' +
            'Adding even one uppercase letter, digit, or symbol expands the search space by 2–4×. ' +
            '2026 password standards (NIST, NCSC) class lowercase-only passwords as weak regardless of length. ' +
            'Try a passphrase with mixed case: "Coral-Fence-Album-Seven".',
    });
  }

  if (length < 12) {
    items.push({
      type: 'warning',
      headline: length < 8 ? 'Far too short' : 'Below recommended length',
      body: `At ${length} characters, this falls below the 2026 minimum of 12 characters. ` +
            'Current global standards (NIST SP 800-63B, NCSC) recommend at least 12–15 characters. ' +
            'Length is the single most important factor — each extra character multiplies the search space.',
    });
  }

  // ── Strengths ────────────────────────────────────────
  if (has.symbol) {
    items.push({
      type: 'success',
      headline: 'Symbols expand the character set',
      body: 'Including symbols like !@#$% multiplies the number of possible combinations ' +
            'by over 30×, making brute force significantly harder.',
    });
  }

  if (has.upper && has.lower) {
    items.push({
      type: 'success',
      headline: 'Mixed case doubles the search space',
      body: 'Using both uppercase and lowercase letters means attackers can\'t skip case-sensitive guesses.',
    });
  }

  if (length >= 16) {
    items.push({
      type: 'success',
      headline: 'Excellent length',
      body: `At ${length} characters, the sheer number of combinations makes brute force impractical even ` +
            'on the most powerful hardware available today.',
    });
  }

  if (score >= 80) {
    items.push({
      type: 'success',
      headline: 'Strong overall',
      body: 'This password has good entropy and avoids common weakness patterns. ' +
            'It would take significant time and resources to crack.',
    });
  }

  // ── Always-shown tips ────────────────────────────────
  if (!has.symbol || !has.upper || !has.digit || length < 15) {
    items.push({
      type: 'tip',
      headline: '2026 standard: 15+ characters beats forced complexity',
      body: 'Global standards no longer mandate symbols or regular changes — they prioritise length. ' +
            'A 15+ character password with mixed case is stronger than a short complex one. ' +
            'Lowercase + uppercase + numbers + symbols across 15+ characters is ideal.',
    });
  }

  items.push({
    type: 'tip',
    headline: 'Try the "three random words" approach',
    body: 'A passphrase like "Coral-Fence-Album-Seven" is easy to remember, over 20 characters, ' +
          'and far harder to crack than "P@ssw0rd!".',
  });

  items.push({
    type: 'tip',
    headline: 'Use a password manager for unique passwords everywhere',
    body: 'Password managers (Bitwarden, 1Password, Dashlane) generate and securely store complex passwords ' +
          'for every account. This way you only need to remember one master password. If one service is breached, ' +
          'your other accounts remain safe because each has a unique password.',
  });

  items.push({
    type: 'tip',
    headline: 'Enable multi-factor authentication (MFA) on critical accounts',
    body: 'Even a perfect password can be stolen. MFA (2FA) adds a second verification step — usually your phone. ' +
          'Enable it on email, banking, social media, and work accounts. Options include authenticator apps (Authy, Google Authenticator), ' +
          'SMS codes, or hardware security keys. This is the single most effective defence against account takeover.',
  });

  return items;
}

// ─────────────────────────────────────────────────────────
// QUICK FIXES
// Specific, actionable steps to improve the current password.
// ─────────────────────────────────────────────────────────

interface QuickFix {
  text: string;
}

function generateQuickFixes(analysis: PasswordAnalysis): QuickFix[] {
  const { patterns, has, length } = analysis;
  const fixes: QuickFix[] = [];

  if (patterns.isCommonPassword) {
    return [{ text: 'Replace entirely — this exact password appears in every attacker\'s breach list' }];
  }

  if (patterns.isDictionaryWord) {
    fixes.push({ text: 'Replace the word or name with random characters, or use a passphrase of 4+ unrelated words' });
  }
  if (patterns.hasKeyboardWalk) {
    fixes.push({ text: 'Remove the keyboard pattern (qwerty, asdf, 12345...)' });
  }
  if (patterns.hasLeetSpeak) {
    fixes.push({ text: 'Remove leet substitutions (@ for a, 0 for o) — crackers apply these automatically' });
  }
  if (patterns.hasCommonSuffix) {
    fixes.push({ text: 'Remove the predictable ending — insert numbers or symbols in the middle instead' });
  }
  if (patterns.hasRepeats) {
    fixes.push({ text: 'Replace repeated characters (aaa, 111) with varied ones' });
  }
  if (!has.symbol) {
    fixes.push({ text: 'Add at least one symbol — ! @ # $ % ^ & *' });
  }
  if (!has.upper) {
    fixes.push({ text: 'Capitalise at least one letter' });
  }
  if (!has.digit) {
    fixes.push({ text: 'Add at least one number' });
  }
  const target = length < 12 ? 12 : 15;
  if (length < target) {
    const needed = target - length;
    fixes.push({ text: `Add ${needed} more character${needed === 1 ? '' : 's'} to reach the recommended ${target}` });
  }

  return fixes;
}

// ─────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────

const TYPE_STYLES = {
  warning: {
    bg:    'rgba(255, 68, 102, 0.08)',
    border:'rgba(255, 68, 102, 0.25)',
    dot:   '#FF4466',
    Icon:  AlertTriangleIcon,
  },
  success: {
    bg:    'rgba(0, 255, 136, 0.06)',
    border:'rgba(0, 255, 136, 0.2)',
    dot:   '#00FF88',
    Icon:  CheckIcon,
  },
  tip: {
    bg:    'rgba(0, 245, 255, 0.06)',
    border:'rgba(0, 245, 255, 0.2)',
    dot:   '#00F5FF',
    Icon:  ArrowRightIcon,
  },
};

export default function FeedbackPanel({ analysis }: Props) {
  const feedback = generateFeedback(analysis);
  const fixes = generateQuickFixes(analysis);
  const showFixes = fixes.length > 0 && analysis.score < 80;

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── How to fix it ────────────────────────────────── */}
      {showFixes && (
        <motion.div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255, 215, 0, 0.06)', border: '1px solid rgba(255, 215, 0, 0.25)' }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: '#FFD700' }}><WrenchIcon size={13} /></span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FFD700' }}>
              How to fix it
            </span>
          </div>
          <ul className="space-y-1.5">
            {fixes.map((fix, i) => (
              <li key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                <span style={{ color: '#FFD700', marginTop: 1, flexShrink: 0 }}><ArrowRightIcon size={11} /></span>
                {fix.text}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ── Section header ───────────────────────────────── */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[var(--text-secondary)]"><BookIcon size={16} /></span>
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
          Why is it {analysis.score < 60 ? 'weak' : 'strong'}?
        </h2>
      </div>

      {/* ── Feedback items ───────────────────────────────── */}
      {feedback.map((item, i) => {
        const style = TYPE_STYLES[item.type];
        return (
          <motion.div
            key={i}
            className="rounded-xl p-3 space-y-1"
            style={{ background: style.bg, border: `1px solid ${style.border}` }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: style.dot }}><style.Icon size={14} /></span>
              <span
                className="text-xs font-semibold"
                style={{ color: style.dot }}
              >
                {item.headline}
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed pl-5">
              {item.body}
            </p>
          </motion.div>
        );
      })}

      {/* ── Passphrase suggestion box ────────────────────── */}
      <motion.div
        className="glass-card p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] mb-2">
          Example of a strong passphrase
        </p>
        <div
          className="font-mono text-sm p-3 rounded-xl text-center"
          style={{ background: 'rgba(0,0,0,0.4)', color: '#00FF88', letterSpacing: '0.05em' }}
        >
          coral-fence-album-seven!9
        </div>
        <p className="text-[10px] text-[var(--text-dim)] mt-2 text-center">
          Memorable · 25 chars · ~100 bits of entropy · Takes centuries to crack
        </p>
      </motion.div>

      {/* ── Privacy notice ───────────────────────────────── */}
      <div
        className="text-center text-[10px] text-[var(--text-dim)] py-2 px-4"
      >
        <span className="inline-flex items-center gap-1"><LockIcon size={10} /> No passwords are stored or transmitted. All analysis runs locally in your browser.</span>
      </div>
    </motion.div>
  );
}
