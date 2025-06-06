
import React from 'react';
import { Github, Linkedin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-border/20">
      <div className="text-center space-y-6">
        {/* Professional Links */}
        <div className="flex items-center justify-center space-x-6 text-size-sm text-muted-foreground">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 hover:text-foreground transition-colors"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 hover:text-foreground transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        {/* Privacy Notice */}
        <div className="flex items-center justify-center space-x-2 text-size-xs text-muted-foreground bg-secondary/30 rounded-lg px-4 py-3 max-w-md mx-auto">
          <Shield className="h-4 w-4 flex-shrink-0" />
          <span>Your location is used only to fetch weather data and is never stored.</span>
        </div>
        
        {/* Copyright */}
        <div className="text-size-xs text-muted-foreground/70">
          © 2024 Weather App by Konakalla Naga Manikanta Raju. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
