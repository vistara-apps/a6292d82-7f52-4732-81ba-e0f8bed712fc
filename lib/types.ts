export interface PoseGuide {
  id: string;
  name: string;
  description: string;
  tips: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'portrait' | 'full-body' | 'group' | 'action';
}

export interface LightingAnalysis {
  quality: 'excellent' | 'good' | 'fair' | 'poor';
  direction: string;
  suggestions: string[];
  score: number;
}

export interface CompositionAnalysis {
  ruleOfThirds: boolean;
  balance: number;
  framing: string;
  suggestions: string[];
}

export interface PhotoSession {
  id: string;
  timestamp: number;
  pose: PoseGuide;
  lighting: LightingAnalysis;
  composition: CompositionAnalysis;
}
