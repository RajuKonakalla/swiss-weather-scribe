
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const FunWeatherFact: React.FC = () => {
  const facts = [
    "The highest temperature ever recorded on Earth was 56.7°C (134°F) in California's Death Valley.",
    "Lightning strikes the Earth about 100 times per second.",
    "A single raindrop can fall at speeds up to 20 mph.",
    "Antarctica is the driest continent on Earth, technically making it a desert.",
    "The fastest recorded wind speed was 408 km/h (253 mph) during a tornado.",
    "Snowflakes can take up to an hour to reach the ground.",
    "The average thunderstorm produces enough energy to power a small town for a week."
  ];

  const [currentFact, setCurrentFact] = useState(facts[0]);

  const getNewFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact);
  };

  return (
    <div className="swiss-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-size-sm font-medium text-muted-foreground">
          Did You Know?
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={getNewFact}
          className="text-size-xs"
        >
          New Fact
        </Button>
      </div>
      
      <p className="text-size-sm text-foreground leading-relaxed">
        {currentFact}
      </p>
    </div>
  );
};
