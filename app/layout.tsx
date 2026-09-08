import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Edmel Konsult | Architect Portfolio',
    template: '',
  },
  description:
    'A portfolio website for Edmel, an architect showcasing his work and projects.',
  applicationName: 'Edmel Konsult',
  authors: [
    {
      name: 'Edmel Konsult',
      url: baseUrl,
    },
  ],
  keywords: [
    'Edmel',
    'Edmel Konsult',
    'Edmel Consult',
    'Architect Portfolio',
    'Architecture',
    'Design',
    'Interior Design',
    'Urban Planning',
    'Sustainable Design',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-16x16.svg',
    apple: '/apple-touch-icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      indexifembedded: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Edmel Konsult | Architect Portfolio',
    description:
      'A portfolio website for Edmel, an architect showcasing his work and projects.',
    url: baseUrl,
    siteName: 'Edmel Konsult',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edmel Konsult | Architect Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edmel Konsult | Architect Portfolio',
    description:
      'A portfolio website for Edmel, an architect showcasing his work and projects.',
    images: ['/og-image.png'],
    creator: '@edmelkonsult',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
