
import React from 'react';
import { Button } from '@/components/ui/button';

interface RecentSearchesProps {
  searches: string[];
  onSearchSelect: (location: string) => void;
}

export const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSearchSelect,
}) => {
  if (searches.length === 0) return null;

  return (
    <div className="swiss-card p-4">
      <h3 className="text-size-sm font-medium text-muted-foreground mb-3">
        Recent Locations
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => onSearchSelect(search)}
            className="text-size-sm h-8 px-3 rounded-full border border-border/50 hover:border-border"
          >
            {search}
          </Button>
        ))}
      </div>
    </div>
  );
};
