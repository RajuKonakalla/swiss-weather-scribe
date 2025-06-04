
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LocationInputProps {
  onSearch: (location: string) => void;
  onGeolocation: () => void;
  loading: boolean;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  onSearch,
  onGeolocation,
  loading,
}) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <div className="swiss-card p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-size-sm font-medium text-muted-foreground mb-2">
            Enter a location (City, Zip Code, Landmark, or Coordinates)
          </label>
          <div className="flex space-x-3">
            <Input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., New York, 10001, Eiffel Tower, 40.7128,-74.0060"
              className="flex-1 text-size-base"
              disabled={loading}
            />
            <Button 
              type="submit" 
              disabled={loading || !location.trim()}
              className="px-6"
            >
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={onGeolocation}
            disabled={loading}
            className="text-size-sm"
          >
            Detect my current location
          </Button>
        </div>
      </form>
    </div>
  );
};
