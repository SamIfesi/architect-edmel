import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-tertiary backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <nav className=" border-b border-border"></nav>
      </div>
    </header>
  );
}
