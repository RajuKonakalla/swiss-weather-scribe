
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-12">
      {/* Circular Logo */}
      <div className="relative">
        <div className="w-32 h-32 bg-background rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border border-border/10">
          {/* Glowing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-sky-300/20 to-blue-500/20 animate-pulse-subtle"></div>
          
          {/* Logo image */}
          <img 
            src="/lovable-uploads/ea4daa5a-0038-4e90-8e68-0e503a254d05.png" 
            alt="Weather App Logo"
            className="w-24 h-24 object-contain relative z-10"
          />
        </div>
        
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/15 via-sky-300/15 to-blue-500/15 blur-xl scale-125 -z-10"></div>
      </div>
      
      {/* App Title */}
      <div className="text-center space-y-3">
        <h1 className="text-size-hero font-light text-balance leading-tight tracking-tight">
          Weather App by{' '}
          <span className="font-medium">Konakalla Naga Manikanta Raju</span>
        </h1>
      </div>
    </div>
  );
};
