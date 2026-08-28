import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Edmel | Architect Portfolio",
  description: "A portfolio website for Edmel, an architect showcasing his work and projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
