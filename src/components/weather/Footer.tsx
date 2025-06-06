
import React from 'react';
import { Github, Linkedin, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-border/20">
      <div className="text-center space-y-6">
        {/* Professional Credentials */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-size-sm text-muted-foreground">
          <span className="font-medium">IBM Data Science Professional Certificate holder</span>
          <div className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="inline-flex items-center space-x-1 hover:text-foreground transition-colors"
              title="GitHub Profile"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center space-x-1 hover:text-foreground transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
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
