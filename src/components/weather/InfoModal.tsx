
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Linkedin, ExternalLink } from 'lucide-react';

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-size-xl">About PM Accelerator</DialogTitle>
          <DialogDescription className="text-size-base space-y-4 pt-4">
            <p>
              The Product Manager Accelerator Program is designed to support PM professionals through every stage of their careers. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
            </p>
            
            <p>
              Our Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavors.
            </p>
            
            <p>
              Here are the examples of services we offer. Check out our website (link under my profile) to learn more about our services.
            </p>
            
            <div className="space-y-3">
              <div>
                <strong>🚀 PMA Pro</strong>
                <p className="text-sm mt-1">
                  End-to-end product manager job hunting program that helps you master FAANG-level Product Management skills, conduct unlimited mock interviews, and gain job referrals through our largest alumni network. 25% of our offers came from tier 1 companies and get paid as high as $800K/year.
                </p>
              </div>
              
              <div>
                <strong>🚀 AI PM Bootcamp</strong>
                <p className="text-sm mt-1">
                  Gain hands-on AI Product Management skills by building a real-life AI product with a team of AI Engineers, data scientists, and designers. We will also help you launch your product with real user engagement using our 100,000+ PM community and social media channels.
                </p>
              </div>
              
              <div>
                <strong>🚀 PMA Power Skills</strong>
                <p className="text-sm mt-1">
                  Designed for existing product managers to sharpen their product management skills, leadership skills, and executive presentation skills
                </p>
              </div>
              
              <div>
                <strong>🚀 PMA Leader</strong>
                <p className="text-sm mt-1">
                  We help you accelerate your product management career, get promoted to Director and product executive levels, and win in the board room.
                </p>
              </div>
              
              <div>
                <strong>🚀 1:1 Resume Review</strong>
                <p className="text-sm mt-1">
                  We help you rewrite your killer product manager resume to stand out from the crowd, with an interview guarantee. Get started by using our FREE killer PM resume template used by over 14,000 product managers.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => window.open('https://www.drnancyli.com/pmresume', '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Free PM Resume Template
                </Button>
              </div>
              
              <div>
                <strong>🚀 Free Training</strong>
                <p className="text-sm mt-1">
                  We also published over 500+ free training and courses. Please go to my YouTube channel and Instagram @drnancyli to start learning for free today.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => window.open('https://www.youtube.com/c/drnancyli', '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  YouTube Channel
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => window.open('https://www.linkedin.com/school/pmaccelerator', '_blank')}
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
