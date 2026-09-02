/**
 * WaveDivider — large, premium flowing energy/data-flow wave transition.
 *
 * Full-viewport-width SVG with a blue → purple gradient,
 * animated light traveling left → right, and a subtle secondary
 * wave behind for depth. Overlaps adjacent sections so there
 * is never a gap.
 */

interface WaveDividerProps {
  /** Extra class names */
  className?: string;
}

export default function WaveDivider({ className = "" }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none relative w-full ${className}`}
      style={{ height: "clamp(80px, 10vw, 140px)" }}
      aria-hidden="true"
    >
      {/* ── Main SVG wave ─────────────────────────────── */}
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* Horizontal blue → purple gradient across the full width */}
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#24B8FF" />
            <stop offset="45%" stopColor="#4F7CFF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          {/* Animated gradient — shifts left→right for traveling light */}
          <linearGradient id="waveGradAnim" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#24B8FF" stopOpacity="0">
              <animate attributeName="offset" values="0;0.3;0" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="20%" stopColor="#24B8FF">
              <animate attributeName="offset" values="0.2;0.6;0.2" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#7C3AED">
              <animate attributeName="offset" values="0.5;0.9;0.5" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="80%" stopColor="#24B8FF" stopOpacity="0">
              <animate attributeName="offset" values="0.8;1;0.8" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="waveGlow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow for the animated overlay */}
          <filter id="waveGlowStrong" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background secondary wave (depth) ──────── */}
        <path
          d="M0 110 C120 70, 300 130, 480 90 C660 50, 840 120, 1020 80 C1200 40, 1350 100, 1440 70 V160 H0 Z"
          fill="url(#waveGrad)"
          opacity="0.12"
          filter="url(#waveGlow)"
        />

        {/* ── Mid wave ───────────────────────────────── */}
        <path
          d="M0 100 C180 60, 360 120, 600 80 C840 40, 1020 110, 1200 70 C1320 50, 1400 80, 1440 60 V160 H0 Z"
          fill="url(#waveGrad)"
          opacity="0.25"
          filter="url(#waveGlow)"
        />

        {/* ── Main foreground wave ───────────────────── */}
        <path
          d="M0 90 C150 45, 350 115, 550 75 C750 35, 950 105, 1150 65 C1300 40, 1400 75, 1440 55 V160 H0 Z"
          fill="url(#waveGrad)"
          opacity="0.6"
          filter="url(#waveGlowStrong)"
        />

        {/* ── Bright edge / ribbon highlight ─────────── */}
        <path
          d="M0 90 C150 45, 350 115, 550 75 C750 35, 950 105, 1150 65 C1300 40, 1400 75, 1440 55"
          fill="none"
          stroke="url(#waveGradAnim)"
          strokeWidth="2"
          opacity="0.8"
          filter="url(#waveGlowStrong)"
        />

        {/* ── Traveling light pulse along the wave ───── */}
        <circle r="40" fill="url(#waveGradAnim)" opacity="0.15" filter="url(#waveGlowStrong)">
          <animateMotion
            path="M0 90 C150 45, 350 115, 550 75 C750 35, 950 105, 1150 65 C1300 40, 1400 75, 1440 55"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="20" fill="#24B8FF" opacity="0.2" filter="url(#waveGlowStrong)">
          <animateMotion
            path="M0 90 C150 45, 350 115, 550 75 C750 35, 950 105, 1150 65 C1300 40, 1400 75, 1440 55"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ── CSS ambient glow (beneath SVG) ────────────── */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        style={{
          height: "60%",
          background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(36,184,255,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
