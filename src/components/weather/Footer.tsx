
import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-border/20">
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center space-x-4 text-size-sm text-muted-foreground">
          <span>IBM Data Science Professional Certificate holder</span>
          <span>•</span>
          <a
            href="#"
            className="hover:text-foreground transition-colors inline-flex items-center space-x-1"
          >
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com"
            className="hover:text-foreground transition-colors inline-flex items-center space-x-1"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="text-size-xs text-muted-foreground max-w-2xl mx-auto">
          <strong>Privacy:</strong> Your location is used only to fetch weather data and is never stored.
        </div>
      </div>
    </footer>
  );
};
