'use client';

import { LightingAnalysis } from '@/lib/types';
import { Sun, AlertCircle, CheckCircle2 } from 'lucide-react';

interface LightingIndicatorProps {
  analysis: LightingAnalysis;
}

export function LightingIndicator({ analysis }: LightingIndicatorProps) {
  const qualityConfig = {
    excellent: {
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      icon: CheckCircle2
    },
    good: {
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      icon: CheckCircle2
    },
    fair: {
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      icon: AlertCircle
    },
    poor: {
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/30',
      icon: AlertCircle
    }
  };

  const config = qualityConfig[analysis.quality];
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-theme border ${config.borderColor} ${config.bgColor}`}>
      <div className="flex items-center gap-3 mb-3">
        <Sun className={`w-6 h-6 ${config.color}`} />
        <div>
          <h3 className="text-sm font-semibold text-fg">Lighting Quality</h3>
          <p className={`text-xs ${config.color} capitalize`}>{analysis.quality}</p>
        </div>
        <div className="ml-auto">
          <div className="text-right">
            <div className={`text-2xl font-bold ${config.color}`}>{analysis.score}</div>
            <div className="text-xs text-muted">Score</div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs text-muted mb-1">Direction</p>
        <p className="text-sm text-fg">{analysis.direction}</p>
      </div>

      <div className="space-y-2">
        {analysis.suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-start gap-2">
            <Icon className={`w-4 h-4 ${config.color} mt-0.5 flex-shrink-0`} />
            <span className="text-xs text-muted">{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
