'use client';

import { CompositionAnalysis } from '@/lib/types';
import { Grid3x3, CheckCircle2, AlertCircle } from 'lucide-react';

interface CompositionGuideProps {
  analysis: CompositionAnalysis;
}

export function CompositionGuide({ analysis }: CompositionGuideProps) {
  return (
    <div className="p-4 rounded-theme border border-border bg-bg/30">
      <div className="flex items-center gap-3 mb-3">
        <Grid3x3 className="w-6 h-6 text-accent" />
        <div>
          <h3 className="text-sm font-semibold text-fg">Composition</h3>
          <p className="text-xs text-muted">{analysis.framing}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="p-3 rounded-lg bg-bg/50 border border-border">
          <div className="flex items-center gap-2 mb-1">
            {analysis.ruleOfThirds ? (
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-yellow-400" />
            )}
            <span className="text-xs font-medium text-fg">Rule of Thirds</span>
          </div>
          <p className="text-xs text-muted">
            {analysis.ruleOfThirds ? 'Applied' : 'Not applied'}
          </p>
        </div>

        <div className="p-3 rounded-lg bg-bg/50 border border-border">
          <div className="flex items-center gap-2 mb-1">
            {analysis.balance > 70 ? (
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-yellow-400" />
            )}
            <span className="text-xs font-medium text-fg">Balance</span>
          </div>
          <p className="text-xs text-muted">{analysis.balance}%</p>
        </div>
      </div>

      <div className="space-y-2">
        {analysis.suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <span className="text-xs text-muted">{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
