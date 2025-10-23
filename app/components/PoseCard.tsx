'use client';

import { PoseGuide } from '@/lib/types';
import { Sparkles, TrendingUp } from 'lucide-react';

interface PoseCardProps {
  pose: PoseGuide;
  onSelect: (pose: PoseGuide) => void;
  isSelected?: boolean;
}

export function PoseCard({ pose, onSelect, isSelected = false }: PoseCardProps) {
  const difficultyColors = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400'
  };

  return (
    <button
      onClick={() => onSelect(pose)}
      className={`
        w-full text-left p-4 rounded-theme border transition-all duration-300
        ${isSelected 
          ? 'border-accent bg-accent/10 glow' 
          : 'border-border bg-bg/30 hover:border-accent/50'
        }
      `}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-fg">{pose.name}</h3>
        {isSelected && <Sparkles className="w-5 h-5 text-accent" />}
      </div>
      
      <p className="text-sm text-muted mb-3">{pose.description}</p>
      
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-medium ${difficultyColors[pose.difficulty]}`}>
          {pose.difficulty.charAt(0).toUpperCase() + pose.difficulty.slice(1)}
        </span>
        <span className="text-xs text-muted">•</span>
        <span className="text-xs text-muted capitalize">{pose.category}</span>
      </div>
      
      <div className="space-y-1">
        {pose.tips.slice(0, 3).map((tip, index) => (
          <div key={index} className="flex items-start gap-2">
            <TrendingUp className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
            <span className="text-xs text-muted">{tip}</span>
          </div>
        ))}
      </div>
    </button>
  );
}
