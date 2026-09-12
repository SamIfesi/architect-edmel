'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import EdmelLogo from '@/components/icons/EdmelLogo';
import { PRIMARY_NAV, ROUTES_SECTION_NAV } from '@/libs/utils';
import MobileNav from './MobileNav';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasSectionNav = ROUTES_SECTION_NAV.some(
    (route) => pathname.startsWith(`${route}/`) || pathname === route
  );

  return (
    <>
      <header
        className={`z-50 bg-tertiary-b/90 backdrop-blur-md border-b border-border ${hasSectionNav ? 'relative' : 'sticky top-0'}`}
      >
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <EdmelLogo className="h-10 w-auto" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {PRIMARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className="text-sm font-medium font-main text-secondary-t hover:text-primary-t transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            role="menubar"
            onClick={() => setMobileOpen(true)}
            className=" flex h-10 w-10 items-center justify-center rounded-full border border-border hover:text-secondary-t text-primary-t transition-colors md:hidden"
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
