export type NavLink = { label: string; href: string; icon: string };

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Work', href: '/work', icon: '' },
  { label: 'Services', href: '/services', icon: '' },
  { label: 'About', href: '/about', icon: '' },
  { label: 'Founder', href: '/founder', icon: '' },
  { label: 'Contact', href: '/contact', icon: '' },
];

export const ROUTES_SECTION_NAV = ['/service', '/work']

export type PageSection = { id: string; label: string };

export const PAGE_SECTIONS: Record<string, PageSection[]> = {
  home: [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ],
  about: [
    { id: 'story', label: 'Story' },
    { id: 'team', label: 'Team' },
    { id: 'values', label: 'Values' },
  ],
};

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'Instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'LinkedIn' },
  { label: 'X', href: 'https://x.com/', icon: 'X' },
];

export const CONTACT_INFO = {
  email: 'hello@edmelkonsult.com',
  phone: '+234 000 000 0000',
  address: 'Nigeria',
};
