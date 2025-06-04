
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Mic } from 'lucide-react';

interface LocationInputProps {
  onSearch: (location: string) => void;
  onGeolocation: () => void;
  onVoiceSearch: () => void;
  loading: boolean;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  onSearch,
  onGeolocation,
  onVoiceSearch,
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
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., New York, 10001, Eiffel Tower, 40.7128,-74.0060"
                className="pl-10 text-size-base"
                disabled={loading}
              />
            </div>
            <Button 
              type="submit" 
              disabled={loading || !location.trim()}
              className="px-6"
            >
              {loading ? 'Searching...' : 'Search'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onVoiceSearch}
              disabled={loading}
              className="p-3"
              title="Voice Search"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={onGeolocation}
            disabled={loading}
            className="text-size-sm inline-flex items-center space-x-2"
          >
            <MapPin className="h-4 w-4" />
            <span>Detect my current location</span>
          </Button>
        </div>
      </form>
    </div>
  );
};
