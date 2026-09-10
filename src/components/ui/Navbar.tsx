import Link from 'next/link';
import EdmelLogo from '@/components/icons/EdmelLogo';
import { NAV_LINKS } from '@/data/constants';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-tertiary backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4 w-full">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <EdmelLogo className="h-10 w-auto" />
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium font-main text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
