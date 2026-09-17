import Link from 'next/link';
import { SERVICES } from '@/libs/utils';
import { ArrowRightIcon } from '@/components/icons/ServiceIcons';

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
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
