'use client';

import { useState, useEffect } from 'react';
import { Camera, Lightbulb, Grid3x3, Share2, Sparkles } from 'lucide-react';
import { PoseCard } from './components/PoseCard';
import { LightingIndicator } from './components/LightingIndicator';
import { CompositionGuide } from './components/CompositionGuide';
import { CameraFrame } from './components/CameraFrame';
import { poseGuides } from '@/lib/poses';
import { analyzeLighting } from '@/lib/lighting';
import { analyzeComposition } from '@/lib/composition';
import { PoseGuide } from '@/lib/types';

type View = 'home' | 'pose' | 'lighting' | 'composition' | 'capture';

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [selectedPose, setSelectedPose] = useState<PoseGuide | null>(null);
  const [lightingAnalysis, setLightingAnalysis] = useState(analyzeLighting());
  const [compositionAnalysis, setCompositionAnalysis] = useState(analyzeComposition());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate frame ready
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Refresh analyses periodically when in relevant views
    if (view === 'lighting' || view === 'composition' || view === 'capture') {
      const interval = setInterval(() => {
        setLightingAnalysis(analyzeLighting());
        setCompositionAnalysis(analyzeComposition());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [view]);

  const handlePoseSelect = (pose: PoseGuide) => {
    setSelectedPose(pose);
  };

  const handleStartSession = () => {
    if (selectedPose) {
      setView('capture');
    }
  };

  if (!isReady) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="shimmer w-16 h-16 rounded-full" />
      </div>
    );
  }

  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-accent" />
            <h1 className="text-3xl font-bold text-fg">PosePerfect AI</h1>
          </div>
          <p className="text-muted">Professional photo guidance at your fingertips</p>
        </div>

        {/* Home View */}
        {view === 'home' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setView('pose')}
                className="p-6 rounded-theme border border-border bg-bg/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-left group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:glow transition-all duration-300">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-fg">Pose Guide</h2>
                    <p className="text-sm text-muted">Choose your perfect pose</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setView('lighting')}
                className="p-6 rounded-theme border border-border bg-bg/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-left group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:glow transition-all duration-300">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-fg">Lighting Optimizer</h2>
                    <p className="text-sm text-muted">Perfect your lighting setup</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setView('composition')}
                className="p-6 rounded-theme border border-border bg-bg/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-left group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:glow transition-all duration-300">
                    <Grid3x3 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-fg">Composition Guide</h2>
                    <p className="text-sm text-muted">Frame your shot perfectly</p>
                  </div>
                </div>
              </button>
            </div>

            {selectedPose && (
              <div className="p-6 rounded-theme border border-accent bg-accent/5 glow">
                <h3 className="text-lg font-semibold text-fg mb-2">Selected Pose</h3>
                <p className="text-accent mb-4">{selectedPose.name}</p>
                <button
                  onClick={handleStartSession}
                  className="w-full py-3 px-6 rounded-theme bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300 glow"
                >
                  Start Photo Session
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pose Selection View */}
        {view === 'pose' && (
          <div className="space-y-4">
            <button
              onClick={() => setView('home')}
              className="text-accent hover:text-accent-hover transition-all duration-300 mb-4"
            >
              ← Back to Home
            </button>
            
            <h2 className="text-2xl font-bold text-fg mb-4">Choose Your Pose</h2>
            
            <div className="grid grid-cols-1 gap-4">
              {poseGuides.map((pose) => (
                <PoseCard
                  key={pose.id}
                  pose={pose}
                  onSelect={handlePoseSelect}
                  isSelected={selectedPose?.id === pose.id}
                />
              ))}
            </div>

            {selectedPose && (
              <button
                onClick={() => setView('home')}
                className="w-full py-3 px-6 rounded-theme bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300 glow"
              >
                Continue
              </button>
            )}
          </div>
        )}

        {/* Lighting View */}
        {view === 'lighting' && (
          <div className="space-y-4">
            <button
              onClick={() => setView('home')}
              className="text-accent hover:text-accent-hover transition-all duration-300 mb-4"
            >
              ← Back to Home
            </button>
            
            <h2 className="text-2xl font-bold text-fg mb-4">Lighting Analysis</h2>
            
            <CameraFrame showGrid={false} />
            
            <LightingIndicator analysis={lightingAnalysis} />

            <div className="p-4 rounded-theme border border-border bg-bg/30">
              <h3 className="text-sm font-semibold text-fg mb-3">Pro Tips</h3>
              <div className="space-y-2">
                <p className="text-xs text-muted">• Position yourself facing natural light sources</p>
                <p className="text-xs text-muted">• Avoid harsh overhead lighting</p>
                <p className="text-xs text-muted">• Golden hour provides the most flattering light</p>
                <p className="text-xs text-muted">• Use reflectors to fill shadows</p>
              </div>
            </div>
          </div>
        )}

        {/* Composition View */}
        {view === 'composition' && (
          <div className="space-y-4">
            <button
              onClick={() => setView('home')}
              className="text-accent hover:text-accent-hover transition-all duration-300 mb-4"
            >
              ← Back to Home
            </button>
            
            <h2 className="text-2xl font-bold text-fg mb-4">Composition Guide</h2>
            
            <CameraFrame showGrid={true} />
            
            <CompositionGuide analysis={compositionAnalysis} />

            <div className="p-4 rounded-theme border border-border bg-bg/30">
              <h3 className="text-sm font-semibold text-fg mb-3">Composition Rules</h3>
              <div className="space-y-2">
                <p className="text-xs text-muted">• Use rule of thirds for balanced shots</p>
                <p className="text-xs text-muted">• Leave space in direction of gaze/movement</p>
                <p className="text-xs text-muted">• Avoid cutting off at joints</p>
                <p className="text-xs text-muted">• Use leading lines to guide the eye</p>
              </div>
            </div>
          </div>
        )}

        {/* Capture View */}
        {view === 'capture' && selectedPose && (
          <div className="space-y-4">
            <button
              onClick={() => setView('home')}
              className="text-accent hover:text-accent-hover transition-all duration-300 mb-4"
            >
              ← Back to Home
            </button>
            
            <div className="p-4 rounded-theme border border-accent bg-accent/5 glow">
              <h2 className="text-xl font-bold text-fg mb-1">{selectedPose.name}</h2>
              <p className="text-sm text-muted">{selectedPose.description}</p>
            </div>

            <CameraFrame showGrid={true} />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-theme border border-border bg-bg/30">
                <h3 className="text-xs font-semibold text-fg mb-2">Lighting</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    lightingAnalysis.quality === 'excellent' || lightingAnalysis.quality === 'good'
                      ? 'bg-green-400'
                      : 'bg-yellow-400'
                  }`} />
                  <span className="text-xs text-muted capitalize">{lightingAnalysis.quality}</span>
                </div>
              </div>

              <div className="p-4 rounded-theme border border-border bg-bg/30">
                <h3 className="text-xs font-semibold text-fg mb-2">Composition</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    compositionAnalysis.balance > 70 ? 'bg-green-400' : 'bg-yellow-400'
                  }`} />
                  <span className="text-xs text-muted">{compositionAnalysis.balance}% balanced</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-theme border border-border bg-bg/30">
              <h3 className="text-sm font-semibold text-fg mb-3">Pose Tips</h3>
              <div className="space-y-2">
                {selectedPose.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">{index + 1}</span>
                    </div>
                    <span className="text-xs text-muted">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="w-full py-4 px-6 rounded-theme bg-accent text-bg font-semibold hover:bg-accent-hover transition-all duration-300 glow flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Capture & Share
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-lg border-t border-border">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setView('home')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-300 ${
                view === 'home' ? 'text-accent bg-accent/10' : 'text-muted hover:text-accent'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => setView('pose')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-300 ${
                view === 'pose' ? 'text-accent bg-accent/10' : 'text-muted hover:text-accent'
              }`}
            >
              <Camera className="w-5 h-5" />
              <span className="text-xs">Poses</span>
            </button>
            <button
              onClick={() => setView('lighting')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-300 ${
                view === 'lighting' ? 'text-accent bg-accent/10' : 'text-muted hover:text-accent'
              }`}
            >
              <Lightbulb className="w-5 h-5" />
              <span className="text-xs">Light</span>
            </button>
            <button
              onClick={() => setView('composition')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-300 ${
                view === 'composition' ? 'text-accent bg-accent/10' : 'text-muted hover:text-accent'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
              <span className="text-xs">Frame</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
