'use client';

import { useEffect, useState } from 'react';
import type { PageSection } from '@/libs/utils';
import Link from 'next/link';

export default function SectionNav({ sections }: { sections: PageSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Accounts for the sticky Navbar (64px) + this bar (~48px)
        rootMargin: '-112px 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 112; // Navbar + SectionNav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-16 z-40 bg-secondary/95 backdrop-blur-md border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center gap-6 overflow-x-auto">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={handleClick(section.id)}
              className={`relative whitespace-nowrap py-3 text-sm font-medium transition-colors ${
                isActive ? 'text-accent' : 'text-secondary hover:text-primary'
              }`}
            >
              {section.label}
              <span
                className={`absolute left-0 right-0 -bottom-px h-0.5 rounded-full bg-accent transition-opacity ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
