
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-size-xl">About PM Accelerator</DialogTitle>
          <DialogDescription className="text-size-base space-y-4 pt-4">
            <p>
              Product Manager Accelerator is a leading professional development program 
              empowering aspiring and experienced product managers to master FAANG-level 
              PM skills, conduct unlimited mock interviews, and access a powerful alumni network.
            </p>
            
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="inline-flex items-center space-x-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>Learn more on LinkedIn</span>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
