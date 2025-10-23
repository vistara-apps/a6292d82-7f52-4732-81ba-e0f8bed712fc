'use client';

import { useState, useEffect } from 'react';
import { Camera, Zap } from 'lucide-react';

interface CameraFrameProps {
  showGrid?: boolean;
}

export function CameraFrame({ showGrid = true }: CameraFrameProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Simulate camera activation
    const timer = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-theme overflow-hidden border-2 border-accent/30 bg-bg/20">
      {/* Camera placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transition-all duration-500 ${isActive ? 'opacity-30' : 'opacity-100'}`}>
          <Camera className="w-16 h-16 text-accent/50" />
        </div>
      </div>

      {/* Grid overlay */}
      {showGrid && isActive && (
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-accent/20" />
          ))}
        </div>
      )}

      {/* Corner markers */}
      {isActive && (
        <>
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-accent" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-accent" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-accent" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-accent" />
        </>
      )}

      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30">
          <Zap className="w-3 h-3 text-accent animate-pulse" />
          <span className="text-xs font-medium text-accent">Live</span>
        </div>
      )}

      {/* Simulated subject placeholder */}
      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-48 rounded-theme border-2 border-dashed border-accent/30 flex items-center justify-center">
            <span className="text-xs text-accent/50">Position yourself here</span>
          </div>
        </div>
      )}
    </div>
  );
}
