import Image from 'next/image';
import Link from 'next/link';
import {ArrowRightIcon} from '@/components/icons/ServiceIcons';

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-accent-l w-full"
      id="contact"
    >
      <Image
        src="/images/cta-building.jpg"
        alt=""
        fill
        className="object-cover object-right opacity-40"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Darkness overlay — solid near the text, fading toward the image */}
      <div className="absolute inset-0 bg-linear-to-r from-accent-l via-accent-l/40 to-accent-l/5 sm:via-accent-l/80 sm:to-accent-l/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-end sm:justify-between ">
        <div className="w-full">
          <h2 className="font-main text-3xl font-semibold leading-tight text-secondary-b sm:text-4xl">
            Let&apos;s design something exceptional together.
          </h2>
          <p className="mt-3 text-sm text-secondary-b/70">
            Tell us about your project and let&apos;s bring your vision to life.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-secondary-b px-5 py-3 text-xs font-semibold uppercase tracking-wide text-primary-t transition-colors hover:bg-accent hover:text-secondary-b"
        >
          Get in Touch
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
