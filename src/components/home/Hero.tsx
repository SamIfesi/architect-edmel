import Link from "next/link";
import HeroSketch from "./HeroLineArt"

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
