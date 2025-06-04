
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface HireMeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-size-xl">Why Hire Me?</DialogTitle>
          <DialogDescription className="text-size-base space-y-4 pt-4">
            <p>
              I am passionate about building real-world AI solutions. My technical expertise 
              in Python, machine learning, and generative AI, combined with hands-on experience 
              in data-driven projects, makes me a strong candidate for Data Science and AI internships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">Technical Skills</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• Python & Machine Learning</li>
                  <li>• Generative AI & LLMs</li>
                  <li>• Data Analysis & Visualization</li>
                  <li>• React & TypeScript</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-size-sm mb-2">Certifications</h4>
                <ul className="text-size-xs text-muted-foreground space-y-1">
                  <li>• IBM Data Science Professional</li>
                  <li>• AI/ML Project Experience</li>
                  <li>• Full-Stack Development</li>
                  <li>• Swiss Design Principles</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
