import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col gap-8">
          <h1 className="font-main text-[2.75rem] font-medium leading-[1.08] tracking-tight text-text-primary sm:text-[3.5rem]">
            Architecture that starts with how you live.
          </h1>
          <p className="max-w-[46ch] text-lg leading-relaxed text-text-secondary">
            Edmel designs homes around the people who live in them — from
            the first sketch to the day you get the keys.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-hover"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
            >
              View our work
            </Link>
          </div>
        </div>

        <HeroSketch />
      </div>
    </section>
  );
}

function HeroSketch() {
  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-md md:mx-0 md:ml-auto">
      <CornerTick className="-left-2 -top-2" />
      <CornerTick className="-right-2 -top-2 rotate-90" />
      <CornerTick className="-bottom-2 -left-2 -rotate-90" />
      <CornerTick className="-bottom-2 -right-2 rotate-180" />
      <div className="h-full w-full border border-border-strong bg-bg-secondary p-10">
        <svg
          viewBox="0 0 240 260"
          className="hero-sketch h-full w-full"
          role="img"
          aria-label="Line drawing of a house elevation"
        >
          <path
            pathLength={1}
            d="M20 260 V140 L120 60 L220 140 V260 Z"
            fill="none"
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
          <path
            pathLength={1}
            d="M60 260 V180 H100 V260"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <line pathLength={1} x1="150" y1="200" x2="190" y2="200" stroke="var(--text-primary)" strokeWidth="2" />
          <line pathLength={1} x1="150" y1="200" x2="150" y2="240" stroke="var(--text-primary)" strokeWidth="2" />
          <line pathLength={1} x1="190" y1="200" x2="190" y2="240" stroke="var(--text-primary)" strokeWidth="2" />
          <line pathLength={1} x1="150" y1="240" x2="190" y2="240" stroke="var(--text-primary)" strokeWidth="2" />
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