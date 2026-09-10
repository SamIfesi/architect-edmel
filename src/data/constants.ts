export const NAV_LINKS = [
  {
    name: 'Home',
    href: '/',
    icon: 'Home',
  },
  {
    name: 'About',
    href: '/about',
    icon: '',
  },
  {
    name: 'Services',
    href: '/services',
    icon: '',
  },
  {
    name: 'Work',
    href: '/work',
    icon: '',
  },
  {
    name: 'Founder',
    href: '/founder',
    icon: '',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: '',
  },
];

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
  { name: 'Instagram', href: 'https://instagram.com/', icon: 'Instagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com/', icon: 'LinkedIn' },
  { name: 'X', href: 'https://x.com/', icon: 'X' },
];

export const CONTACT_INFO = {
  email: 'hello@edmelkonsult.com',
  phone: '+234 000 000 0000',
  address: 'Nigeria',
};