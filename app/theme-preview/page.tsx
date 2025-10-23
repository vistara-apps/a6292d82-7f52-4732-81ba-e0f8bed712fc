'use client';

import { useTheme } from '../components/ThemeProvider';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Magical Innovation', description: 'Gradient blue to purple with silver accents' },
  { id: 'celo', name: 'Celo', description: 'Black background with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
  { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue accents' },
] as const;

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Palette className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-fg">Theme Preview</h1>
          </div>
          <p className="text-muted">Choose your preferred theme</p>
        </div>

        <div className="space-y-4 mb-8">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className={`w-full p-4 rounded-theme border transition-all duration-300 text-left ${
                theme === t.id
                  ? 'border-accent bg-accent/10 glow'
                  : 'border-border bg-bg/30 hover:border-accent/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-fg mb-1">{t.name}</h3>
                  <p className="text-sm text-muted">{t.description}</p>
                </div>
                {theme === t.id && (
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="p-6 rounded-theme border border-border bg-bg/30">
          <h2 className="text-xl font-bold text-fg mb-4">Preview Components</h2>
          
          <div className="space-y-4">
            <button className="w-full py-3 px-6 rounded-theme bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300">
              Primary Button
            </button>

            <div className="p-4 rounded-theme border border-accent bg-accent/5">
              <p className="text-fg">Highlighted content with accent border</p>
            </div>

            <div className="p-4 rounded-theme border border-border bg-bg/50">
              <p className="text-muted">Muted content with standard border</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-accent hover:text-accent-hover transition-all duration-300"
          >
            ← Back to App
          </a>
        </div>
      </div>
    </main>
  );
}
