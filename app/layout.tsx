import type { Metadata } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';

import { SiteFooter } from '@/components/course/site-footer';
import { SiteHeader } from '@/components/course/site-header';
import { ThemeProvider } from '@/components/ui/theme-provider';

import './globals.css';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Front-Edge Academy',
  description: 'Plataforma de estudos Front-End com trilhas, conteudo didatico e mini IDE.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
