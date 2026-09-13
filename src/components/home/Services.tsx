// src/components/home/Services.tsx
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  href: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 34V14l8-6 8 6v20M8 34h16M8 22h8M28 34V20l6-4v18M28 34h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InteriorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="16"
        width="12"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="10" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 24h12" stroke="currentColor" strokeWidth="1.2" />
      <rect
        x="22"
        y="14"
        width="12"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M25 20l3-3 3 3M25 24h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PropertyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 34V12l6-4 6 4v22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 34h12M13 34V16M19 34V16M25 18l7-4v20h-7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8v8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EngineeringIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 28c4-8 8-12 12-12s8 4 12 12M4 28h24M10 22V12M22 22V16M6 28v4M20 28v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    title: 'Architecture',
    description:
      'Thoughtful designs that balance function, aesthetics and sustainability.',
    href: '/services#architecture',
    Icon: ArchitectureIcon,
  },
  {
    title: 'Interior Architecture',
    description:
      'Beautiful, intentional interiors that elevate everyday experiences.',
    href: '/services#interior',
    Icon: InteriorIcon,
  },
  {
    title: 'Property Development',
    description:
      'End-to-end development of residential, commercial and mixed-use projects.',
    href: '/services#property',
    Icon: PropertyIcon,
  },
  {
    title: 'Engineering Solutions',
    description:
      'Innovative and reliable engineering that supports structure, safety and performance.',
    href: '/services#engineering',
    Icon: EngineeringIcon,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-tertiary-b">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-border lg:divide-y-0 lg:divide-x">
          {SERVICES.map(({ title, description, href, Icon }) => (
            <div
              key={title}
              className="flex flex-col gap-4 py-8 first:pt-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <Icon className="h-9 w-9 text-primary-t" />

              <h3 className="font-main text-sm font-semibold tracking-wide uppercase text-primary-t">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-secondary-t max-w-[26ch]">
                {description}
              </p>

              <Link
                href={href}
                className="mt-1 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary-t hover:text-accent transition-colors"
              >
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7h8M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
