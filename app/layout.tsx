import './globals.css';

import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';
import type { Metadata } from 'next';

import Header from './components/Header';
import Main from './components/Main';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '400'],
  variable: '--font-barlow',
});

const barlow_condensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['100', '400'],
  variable: '--font-barlow-condensed',
});

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--bellefair',
});

export const metadata: Metadata = {
  title: 'Space App- Next.js',
  description: 'App about space',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}
    >
      <body className={`mx-auto max-w-[1440px]`}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
