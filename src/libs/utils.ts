import { createElement } from 'react';
import {
  ArchitectureIcon,
  InteriorIcon,
  PropertyIcon,
  EngineeringIcon,
} from '@/components/icons/ServiceIcons';

export type NavLink = { label: string; href: string; icon: string };

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Work', href: '/work', icon: '' },
  { label: 'Services', href: '/services', icon: '' },
  { label: 'About', href: '/about', icon: '' },
  { label: 'Founder', href: '/founder', icon: '' },
  { label: 'Contact', href: '/contact', icon: '' },
];

export const ROUTES_SECTION_NAV = ['/service', '/work'];

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
  services: [
    { id: 'architecture', label: 'Architecture' },
    { id: 'interior', label: 'Interior' },
    { id: 'property', label: 'Property' },
    { id: 'engineering', label: 'Engineering' },
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

export const FEATURES = [
  {
    title: 'Client-Focused',
    description: 'We listen, collaborate and deliver beyond expectations.',
    icon: createElement(
      'svg',
      {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        'aria-hidden': true,
      },
      createElement('circle', {
        cx: 12,
        cy: 12,
        r: 10,
        stroke: 'currentColor',
        strokeWidth: 1.4,
      }),
      createElement('path', {
        d: 'M12 16.5c-2.4-1.6-4-3.1-4-5a2.3 2.3 0 0 1 4-1.5 2.3 2.3 0 0 1 4 1.5c0 1.9-1.6 3.4-4 5Z',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinejoin: 'round',
      })
    ),
  },
  {
    title: 'Innovative Design',
    description: 'We combine creativity with function and sustainability.',
    icon: createElement(
      'svg',
      {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        'aria-hidden': true,
      },
      createElement('circle', {
        cx: 12,
        cy: 12,
        r: 1.6,
        stroke: 'currentColor',
        strokeWidth: 1.4,
      }),
      createElement('path', {
        d: 'M12 3v3.4M12 17.6V21M21 12h-3.4M6.4 12H3M18.1 5.9l-2.4 2.4M8.3 15.7l-2.4 2.4M18.1 18.1l-2.4-2.4M8.3 8.3 5.9 5.9',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinecap: 'round',
      })
    ),
  },
  {
    title: 'End-to-End Service',
    description: "From concept to completion, we've got you covered.",
    icon: createElement(
      'svg',
      {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        'aria-hidden': true,
      },
      createElement('path', {
        d: 'M4 11 12 4l8 7',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      createElement('path', {
        d: 'M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinejoin: 'round',
      })
    ),
  },
];

export type Service = {
  title: string;
  description: string;
  href: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

export const SERVICES: Service[] = [
  {
    title: 'Architecture',
    description:
      'Thoughtful designs that balance function, aesthetics and sustainability.',
    href: '/services#architecture',
    Icon: ArchitectureIcon,
  },
  {
    title: 'Interior Architecture',
    description:
      'Beautiful, intentional interiors that elevate everyday experiences.',
    href: '/services#interior',
    Icon: InteriorIcon,
  },
  {
    title: 'Property Development',
    description:
      'End-to-end development of residential, commercial and mixed-use projects.',
    href: '/services#property',
    Icon: PropertyIcon,
  },
  {
    title: 'Engineering Solutions',
    description:
      'Innovative and reliable engineering that supports structure, safety and performance.',
    href: '/services#engineering',
    Icon: EngineeringIcon,
  },
];
