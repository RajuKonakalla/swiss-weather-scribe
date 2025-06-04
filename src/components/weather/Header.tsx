
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, Sun, Moon, ArrowDown } from 'lucide-react';

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
    <header className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
      <div className="text-center lg:text-left">
        <h1 className="text-size-hero font-light text-balance leading-tight">
          Weather App by{' '}
          <span className="font-medium">Konakalla Naga Manikanta Raju</span>
        </h1>
        <p className="text-size-lg text-muted-foreground mt-2 font-light">
          Sleek, Modern, Swiss Design – Powered by AI
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Font Size Controls */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">A</span>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFontScaleChange(Math.max(0.8, fontScale - 0.1))}
              disabled={fontScale <= 0.8}
              title="Decrease font size"
            >
              -
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onFontScaleChange(Math.min(1.4, fontScale + 0.1))}
              disabled={fontScale >= 1.4}
              title="Increase font size"
            >
              +
            </Button>
          </div>
          <span className="text-lg text-muted-foreground">A</span>
        </div>
        
        {/* Dark Mode Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={onDarkModeToggle}
          className="w-10 h-10 p-0"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        
        {/* Info Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onInfoClick}
          className="w-10 h-10 p-0"
          title="About this app"
        >
          <Info className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
