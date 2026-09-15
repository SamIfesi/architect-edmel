import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons/ServiceIcons';

type ServiceDetailProps = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  Icon: (props: { className?: string }) => React.ReactElement;
  reverse?: boolean;
};

export default function ServiceDetail({
  id,
  title,
  paragraphs,
  bullets,
  Icon,
  reverse = false,
}: ServiceDetailProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border py-20 first:border-t-0 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div
          className={`flex aspect-square items-center justify-center border border-border bg-secondary-b md:aspect-4/5 ${
            reverse ? 'md:order-2' : ''
          }`}
        >
          <Icon className="h-28 w-28 text-accent md:h-36 md:w-36" />
        </div>

        <div className={reverse ? 'md:order-1' : ''}>
          <h2 className="font-main text-2xl font-semibold text-primary-t md:text-3xl">
            {title}
          </h2>

          <div className="mt-5 flex flex-col gap-4">
            {paragraphs.map((p) => (
              <p
                key={p}
                className="text-secondary-t leading-relaxed max-w-[62ch]"
              >
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-6 flex flex-col gap-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-primary-t"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-t px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary-b transition-colors hover:bg-accent"
          >
            Talk to us about a project
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
