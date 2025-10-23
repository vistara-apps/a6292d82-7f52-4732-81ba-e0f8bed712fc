import { CompositionAnalysis } from './types';

export function analyzeComposition(mockData?: Partial<CompositionAnalysis>): CompositionAnalysis {
  // In a real app, this would analyze the camera frame
  // For demo, we'll return mock analysis
  
  const ruleOfThirds = mockData?.ruleOfThirds ?? Math.random() > 0.5;
  const balance = mockData?.balance ?? Math.floor(Math.random() * 100);
  
  const framingOptions = [
    'Subject well-centered',
    'Subject positioned on rule of thirds',
    'Too much headroom',
    'Subject too close to edge',
    'Perfect negative space'
  ];
  
  const framing = mockData?.framing || framingOptions[Math.floor(Math.random() * framingOptions.length)];
  
  const suggestions: string[] = [];
  
  if (!ruleOfThirds) {
    suggestions.push('Try positioning subject on rule of thirds gridlines');
  }
  
  if (balance < 50) {
    suggestions.push('Reframe to create better visual balance');
  }
  
  if (framing.includes('headroom')) {
    suggestions.push('Reduce empty space above subject');
  }
  
  if (framing.includes('edge')) {
    suggestions.push('Give subject more breathing room in frame');
  }
  
  if (suggestions.length === 0) {
    suggestions.push('Excellent composition! Ready to shoot');
  }
  
  return {
    ruleOfThirds,
    balance,
    framing,
    suggestions: mockData?.suggestions || suggestions
  };
}

export function getCompositionTips(): string[] {
  return [
    'Rule of thirds: Position subject on gridline intersections',
    'Leave space in the direction subject is looking/moving',
    'Use leading lines to guide viewer\'s eye to subject',
    'Frame subject with natural elements (doorways, trees)',
    'Avoid cutting off at joints (knees, elbows, wrists)',
    'Create depth with foreground, subject, and background',
    'Use negative space to emphasize subject',
    'Ensure background doesn\'t distract from subject'
  ];
}
