export default function HeroSketch() {
  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-md md:mx-0 md:ml-auto">
      <CornerTick className="-left-2 -top-2" />
      <CornerTick className="-right-2 -top-2 rotate-90" />
      <CornerTick className="-bottom-2 -left-2 -rotate-90" />
      <CornerTick className="-bottom-2 -right-2 rotate-180" />
      <div className="h-full w-full border border-border-strong bg-secondary-b p-10">
        <svg
          viewBox="0 0 240 260"
          className="hero-sketch h-full w-full"
          role="img"
          aria-label="Line drawing of a house elevation"
        >
          {/* Walls + pitched roof */}
          <path
            pathLength={1}
            d="M20 260 V140 L120 60 L220 140 V260 Z"
            fill="none"
            stroke="var(--text-primary)"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{ animationDelay: '0s' }}
          />

          {/* Roof eave overhangs */}
          <line pathLength={1} x1="8" y1="147" x2="20" y2="140" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.15s' }} />
          <line pathLength={1} x1="232" y1="147" x2="220" y2="140" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.15s' }} />

          {/* Chimney */}
          <path pathLength={1} d="M165 140 V84 H185 V140" fill="none" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.25s' }} />
          <line pathLength={1} x1="162" y1="84" x2="188" y2="84" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.35s' }} />

          {/* Roof shingle texture */}
          <line pathLength={1} x1="60" y1="118" x2="80" y2="98" stroke="var(--text-muted)" strokeWidth="1" style={{ animationDelay: '0.4s' }} />
          <line pathLength={1} x1="90" y1="88" x2="105" y2="73" stroke="var(--text-muted)" strokeWidth="1" style={{ animationDelay: '0.45s' }} />
          <line pathLength={1} x1="180" y1="118" x2="160" y2="98" stroke="var(--text-muted)" strokeWidth="1" style={{ animationDelay: '0.4s' }} />
          <line pathLength={1} x1="150" y1="88" x2="135" y2="73" stroke="var(--text-muted)" strokeWidth="1" style={{ animationDelay: '0.45s' }} />

          {/* Left window with mullions */}
          <path pathLength={1} d="M40 190 H80 V226 H40 Z" fill="none" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.55s' }} />
          <line pathLength={1} x1="60" y1="190" x2="60" y2="226" stroke="var(--text-primary)" strokeWidth="1.5" style={{ animationDelay: '0.7s' }} />
          <line pathLength={1} x1="40" y1="208" x2="80" y2="208" stroke="var(--text-primary)" strokeWidth="1.5" style={{ animationDelay: '0.7s' }} />

          {/* Right window with mullions */}
          <path pathLength={1} d="M160 190 H200 V226 H160 Z" fill="none" stroke="var(--text-primary)" strokeWidth="2" style={{ animationDelay: '0.6s' }} />
          <line pathLength={1} x1="180" y1="190" x2="180" y2="226" stroke="var(--text-primary)" strokeWidth="1.5" style={{ animationDelay: '0.75s' }} />
          <line pathLength={1} x1="160" y1="208" x2="200" y2="208" stroke="var(--text-primary)" strokeWidth="1.5" style={{ animationDelay: '0.75s' }} />

          {/* Door */}
          <path pathLength={1} d="M100 260 V180 H140 V260" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ animationDelay: '0.85s' }} />
          <circle pathLength={1} cx="132" cy="222" r="3" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ animationDelay: '1s' }} />

          {/* Ground line */}
          <line pathLength={1} x1="0" y1="260" x2="240" y2="260" stroke="var(--text-muted)" strokeWidth="1.5" style={{ animationDelay: '1.05s' }} />
        </svg>
      </div>
    </div>
  );
}

function CornerTick({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute h-4 w-4 text-accent ${className}`}
      aria-hidden="true"
    >
      <path d="M0 0 H16 M0 0 V16" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}