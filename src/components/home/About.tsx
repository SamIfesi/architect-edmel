import Image from 'next/image';
import Link from 'next/link';
import { FEATURES } from '@/libs/utils';
import { ArrowRightIcon } from '@/components/icons/ServiceIcons';

export default function About() {
  return (
    <section className="bg-secondary-b w-full" id="about">
      <div className="mx-auto grid max-w-6xl">
        {/* Image column */}
        <div className="relative min-h-104 lg:min-h-128">
          <Image
            src="/images/about-interior.jpg"
            alt="Interior staircase of an Edmel Architect project"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute bottom-6 left-6 max-w-52 bg-secondary-b/95 p-5 backdrop-blur-sm">
            <div className="font-main text-4xl font-semibold text-primary-t">
              10+
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-t">
              Years of Experience
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-t">
              Delivering excellence across design and construction.
            </p>
          </div>
        </div>

        {/* Text + features column */}
        <div className="grid sm:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-center gap-6 px-6 py-12 sm:px-0">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary-t">
              About Edmel Architect
            </span>
            <h2 className="font-main text-3xl font-semibold leading-tight text-primary-t sm:text-4xl">
              We believe great design has the power to transform lives and
              communities.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary-t">
              At Edmel Architect, we approach every project with creativity,
              precision and a deep understanding of our clients&apos; needs.
              From concept to construction, we create spaces that are timeless,
              functional and uniquely crafted.
            </p>
            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-t px-5 py-3 text-xs font-semibold uppercase tracking-wide text-secondary-b transition-colors hover:bg-accent-l"
            >
              About Us
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex flex-col justify-center divide-y divide-border px-6 py-8 lg:px-10 lg:py-12">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary-t">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-primary-t">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-56 text-xs leading-relaxed text-muted-t">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
