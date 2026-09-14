import Link from 'next/link';
import {SERVICES} from '@/libs/utils';

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
