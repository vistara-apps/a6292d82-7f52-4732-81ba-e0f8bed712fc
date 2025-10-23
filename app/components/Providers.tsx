'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';
import { type ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider 
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'cdp_demo_key'} 
      chain={base}
    >
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </OnchainKitProvider>
  );
}
