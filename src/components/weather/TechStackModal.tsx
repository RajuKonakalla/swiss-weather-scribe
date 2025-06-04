
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TechStackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TechStackModal: React.FC<TechStackModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-size-xl">Tech Stack Spotlight</DialogTitle>
          <DialogDescription className="text-size-base space-y-4 pt-4">
            <p>
              This app is built with Python, Streamlit, OpenWeatherMap API, and modern 
              UI/UX libraries. AI-driven insights are powered by custom Python scripts 
              and data science best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">Frontend Tech</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• React & TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Shadcn/ui Components</li>
                  <li>• Swiss Design Principles</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">AI & Data Science</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• Python & Machine Learning</li>
                  <li>• OpenWeatherMap API</li>
                  <li>• Custom AI Insights Engine</li>
                  <li>• Data Visualization</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">Features</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• Voice Search Integration</li>
                  <li>• Geolocation Support</li>
                  <li>• Animated Backgrounds</li>
                  <li>• Accessibility Features</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">Why Hire Me?</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• IBM Data Science Certified</li>
                  <li>• Full-Stack Development</li>
                  <li>• AI/ML Project Experience</li>
                  <li>• Modern Design Principles</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
