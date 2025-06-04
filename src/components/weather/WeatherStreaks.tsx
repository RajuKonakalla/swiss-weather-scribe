
import React from 'react';

interface WeatherStreaksProps {
  searchCount: number;
}

export const WeatherStreaks: React.FC<WeatherStreaksProps> = ({ searchCount }) => {
  const getStreakBadge = () => {
    if (searchCount >= 10) return { level: 'Weather Master', color: 'bg-yellow-500' };
    if (searchCount >= 5) return { level: 'Weather Expert', color: 'bg-blue-500' };
    if (searchCount >= 3) return { level: 'Weather Watcher', color: 'bg-green-500' };
    if (searchCount >= 1) return { level: 'Weather Beginner', color: 'bg-gray-500' };
    return null;
  };

  const badge = getStreakBadge();

  if (!badge) return null;

  return (
    <div className="swiss-card p-4">
      <h3 className="text-size-sm font-medium text-muted-foreground mb-3">
        Weather Streaks
      </h3>
      
      <div className="text-center space-y-3">
        <div className={`inline-flex items-center px-3 py-2 rounded-full text-white text-size-xs font-medium ${badge.color}`}>
          {badge.level}
        </div>
        
        <div className="text-size-lg font-light tabular-nums">
          {searchCount}
        </div>
        
        <div className="text-size-xs text-muted-foreground">
          {searchCount === 1 ? 'search' : 'searches'} today
        </div>
      </div>
    </div>
  );
};
