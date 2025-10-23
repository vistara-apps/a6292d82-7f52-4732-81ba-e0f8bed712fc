import { LightingAnalysis } from './types';

export function analyzeLighting(mockData?: Partial<LightingAnalysis>): LightingAnalysis {
  // In a real app, this would use camera/sensor data
  // For demo, we'll return mock analysis
  
  const qualities: LightingAnalysis['quality'][] = ['excellent', 'good', 'fair', 'poor'];
  const quality = mockData?.quality || qualities[Math.floor(Math.random() * qualities.length)];
  
  const directions = [
    'Natural window light from left',
    'Overhead lighting',
    'Backlit with rim light',
    'Front-facing soft light',
    'Side lighting creating dimension'
  ];
  
  const direction = mockData?.direction || directions[Math.floor(Math.random() * directions.length)];
  
  const allSuggestions = {
    excellent: [
      'Perfect lighting! Maintain this position',
      'Great soft shadows creating dimension',
      'Ideal color temperature'
    ],
    good: [
      'Move slightly toward the light source',
      'Consider adding a reflector for fill light',
      'Good overall, minor adjustments needed'
    ],
    fair: [
      'Reposition to avoid harsh shadows',
      'Find softer, more diffused light',
      'Consider changing time of day'
    ],
    poor: [
      'Move to a location with better natural light',
      'Avoid direct overhead lighting',
      'Use window light or add artificial lighting'
    ]
  };
  
  const suggestions = mockData?.suggestions || allSuggestions[quality];
  
  const scores = { excellent: 95, good: 75, fair: 55, poor: 30 };
  const score = mockData?.score || scores[quality];
  
  return {
    quality,
    direction,
    suggestions,
    score
  };
}

export function getLightingTips(): string[] {
  return [
    'Golden hour (sunrise/sunset) provides the most flattering light',
    'Window light is your best friend for indoor photos',
    'Avoid harsh overhead lighting - it creates unflattering shadows',
    'Overcast days provide beautiful, soft, even lighting',
    'Position yourself facing the light source for even illumination',
    'Use reflectors or white surfaces to bounce light and fill shadows',
    'Backlighting can create beautiful rim light effects',
    'Avoid mixed color temperatures (warm + cool lights together)'
  ];
}
