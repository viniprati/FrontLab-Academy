'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    {children}
  </NextThemesProvider>
);
