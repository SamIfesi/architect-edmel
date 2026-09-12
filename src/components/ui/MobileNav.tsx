'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import EdmelLogo from '@/components/icons/EdmelLogo';
import { PRIMARY_NAV } from '@/libs/utils';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    // Prevent scrolling when mobile nav is open
    const PreviousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Close mobile nav when escape key is pressed
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keyup', handleKey);

    return () => {
      document.body.style.overflow = PreviousOverflow;
      window.removeEventListener('keyup', handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobileNav"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed insert-0 z-50 flex h-dvh flex-col bg-primary-b  w-full"
    >
      <div className="flex items-center justify-between px-6 h-16 border-b border-border">
        <EdmelLogo className="h-10 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary"
          aria-label="Close menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav
        className="flex flex-1 flex-col items-start justify-space-between px-6 py-4 h-50"
        aria-label="Primary"
      >
        {PRIMARY_NAV.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-main text-2xl text-primary-t transition-colors hover:text-accent py-2"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 text-sm text-muted-t">
        <a href="mailto:hello@edmel.studio" className="hover:text-text-primary">
          hello@edmel.studio
        </a>
      </div>
    </div>
  );
}
