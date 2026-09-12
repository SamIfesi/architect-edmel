import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/libs/utils';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-tertiary">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Architecture, interiors, and urban design rooted in thoughtful,
              sustainable practice.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-secondary font-medium">Contact</span>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-muted hover:text-accent transition-colors"
            >
              {CONTACT_INFO.email}
            </Link>
            <Link
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-muted hover:text-accent transition-colors"
            >
              {CONTACT_INFO.phone}
            </Link>
            <span className="text-muted">{CONTACT_INFO.address}</span>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="text-secondary font-medium">Follow</span>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-xs text-muted">
          © {year} Edmel Konsult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
