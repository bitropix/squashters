import './globals.css';
import '@/styles/cstyle.css';
import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';

const _inter = Inter({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Squashters | Premier Squash Coaching in Delhi NCR',
  description:
    'Transform your squash game with 20+ years of professional coaching experience. Elite training programs for juniors, adults, and corporate teams across Delhi, Gurgaon, Noida, and Faridabad.',
  keywords: 'squash academy, squash coaching, Delhi, Gurgaon, Noida, Faridabad, junior squash, professional coaching',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
