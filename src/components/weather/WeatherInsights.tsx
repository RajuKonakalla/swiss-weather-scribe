
import React from 'react';

interface WeatherInsightsProps {
  location: string;
}

export const WeatherInsights: React.FC<WeatherInsightsProps> = ({ location }) => {
  const insights = [
    `Today is warmer than average for ${location}.`,
    'Expect slightly higher humidity than usual.',
    'Wind conditions are favorable for outdoor activities.',
    'UV index is moderate - sunscreen recommended.'
  ];

  return (
    <div className="swiss-card p-6">
      <h3 className="text-size-lg font-medium mb-4">Weather Insights</h3>
      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/30"
          >
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
            <p className="text-size-sm text-muted-foreground">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
