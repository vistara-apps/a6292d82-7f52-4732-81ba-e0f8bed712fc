import { PoseGuide } from './types';

export const poseGuides: PoseGuide[] = [
  {
    id: 'classic-portrait',
    name: 'Classic Portrait',
    description: 'Timeless and elegant portrait pose',
    tips: [
      'Turn body 45° from camera',
      'Chin slightly down and forward',
      'Relax shoulders, one slightly lower',
      'Soft smile with eyes engaged',
      'Hand placement: gentle on hip or face'
    ],
    difficulty: 'beginner',
    category: 'portrait'
  },
  {
    id: 'power-stance',
    name: 'Power Stance',
    description: 'Confident and commanding full-body pose',
    tips: [
      'Feet shoulder-width apart',
      'Weight on back foot',
      'Shoulders back, chest open',
      'Hands on hips or crossed',
      'Direct eye contact with camera'
    ],
    difficulty: 'beginner',
    category: 'full-body'
  },
  {
    id: 'candid-laugh',
    name: 'Candid Laugh',
    description: 'Natural and joyful expression',
    tips: [
      'Think of something genuinely funny',
      'Let shoulders move naturally',
      'Eyes crinkle with genuine smile',
      'Tilt head slightly',
      'Relax your hands'
    ],
    difficulty: 'intermediate',
    category: 'portrait'
  },
  {
    id: 'walking-motion',
    name: 'Walking Motion',
    description: 'Dynamic movement pose',
    tips: [
      'Walk naturally toward camera',
      'Look slightly away, then to camera',
      'Let arms swing naturally',
      'Confident stride',
      'Capture mid-step for energy'
    ],
    difficulty: 'intermediate',
    category: 'action'
  },
  {
    id: 'seated-elegance',
    name: 'Seated Elegance',
    description: 'Graceful seated position',
    tips: [
      'Sit on edge of chair',
      'Cross legs at ankles',
      'Elongate spine',
      'Hands gently placed',
      'Slight lean forward'
    ],
    difficulty: 'beginner',
    category: 'portrait'
  },
  {
    id: 'over-shoulder',
    name: 'Over the Shoulder',
    description: 'Mysterious and engaging look back',
    tips: [
      'Turn body away from camera',
      'Look back over shoulder',
      'Chin down slightly',
      'Soft expression',
      'Create diagonal line with body'
    ],
    difficulty: 'intermediate',
    category: 'portrait'
  }
];

export function getPoseById(id: string): PoseGuide | undefined {
  return poseGuides.find(pose => pose.id === id);
}

export function getPosesByCategory(category: PoseGuide['category']): PoseGuide[] {
  return poseGuides.filter(pose => pose.category === category);
}

export function getPosesByDifficulty(difficulty: PoseGuide['difficulty']): PoseGuide[] {
  return poseGuides.filter(pose => pose.difficulty === difficulty);
}
