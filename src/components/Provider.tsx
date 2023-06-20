'use client';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
