
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  darkMode: boolean;
  onDarkModeToggle: () => void;
  fontScale: number;
  onFontScaleChange: (scale: number) => void;
  onInfoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  onDarkModeToggle,
  fontScale,
  onFontScaleChange,
  onInfoClick,
}) => {
  return (
    <header className="relative">
      {/* Controls - positioned at top right */}
      <div className="absolute top-4 right-0 flex items-center space-x-3 z-10">
        {/* Font Size Controls */}
        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/20">
          <span className="text-xs text-muted-foreground">A</span>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFontScaleChange(Math.max(0.8, fontScale - 0.1))}
              disabled={fontScale <= 0.8}
              title="Decrease font size"
              className="h-7 w-7 p-0 text-xs"
            >
              -
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFontScaleChange(Math.min(1.4, fontScale + 0.1))}
              disabled={fontScale >= 1.4}
              title="Increase font size"
              className="h-7 w-7 p-0 text-xs"
            >
              +
            </Button>
          </div>
          <span className="text-sm text-muted-foreground">A</span>
        </div>
        
        {/* Dark Mode Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={onDarkModeToggle}
          className="w-10 h-10 p-0 bg-background/80 backdrop-blur-sm border-border/20"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        
        {/* Info Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onInfoClick}
          className="w-10 h-10 p-0 bg-background/80 backdrop-blur-sm border-border/20"
          title="About this app"
        >
          <Info className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Main Logo Section */}
      <div className="pt-20 pb-8">
        <Logo />
      </div>
    </header>
  );
};
