
import React from 'react';
import { MapPin } from 'lucide-react';

interface MiniMapProps {
  coordinates: { lat: number; lng: number };
}

export const MiniMap: React.FC<MiniMapProps> = ({ coordinates }) => {
  return (
    <div className="swiss-card p-4">
      <h3 className="text-size-sm font-medium text-muted-foreground mb-3">
        Location Map
      </h3>
      
      <div className="relative h-32 bg-secondary/30 rounded-lg overflow-hidden">
        {/* Simplified map visualization */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50" />
        
        {/* Location marker */}
        <div 
          className="absolute flex items-center justify-center"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="relative">
            <MapPin className="w-6 h-6 text-red-500 animate-pulse-subtle" />
            <div className="absolute inset-0 w-6 h-6 border-2 border-red-500/30 rounded-full animate-ping" />
          </div>
        </div>
        
        {/* Coordinates display */}
        <div className="absolute bottom-2 left-2 text-size-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          {coordinates.lat.toFixed(3)}, {coordinates.lng.toFixed(3)}
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-4 grid-rows-4 h-full border border-gray-300">
            {Array.from({ length: 16 }, (_, i) => (
              <div key={i} className="border border-gray-300/50" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
