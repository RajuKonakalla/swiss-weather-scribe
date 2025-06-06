
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mb-16 pt-8">
      {/* Circular Logo */}
      <div className="relative">
        <div className="w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border-0">
          {/* Subtle inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-50/30 via-sky-50/20 to-blue-100/30"></div>
          
          {/* Logo image */}
          <img 
            src="/lovable-uploads/ea4daa5a-0038-4e90-8e68-0e503a254d05.png" 
            alt="Weather App Logo"
            className="w-20 h-20 object-contain relative z-10"
          />
        </div>
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/20 via-sky-200/15 to-blue-300/20 blur-xl scale-110 -z-10"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/10 via-sky-100/10 to-blue-200/10 blur-2xl scale-125 -z-20"></div>
      </div>
      
      {/* App Title */}
      <div className="text-center">
        <h1 className="text-size-3xl font-semibold text-foreground leading-tight tracking-tight">
          Weather App by{' '}
          <span className="font-bold">Konakalla Naga Manikanta Raju</span>
        </h1>
      </div>
    </div>
  );
};
