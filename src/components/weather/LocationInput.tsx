
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
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [useCoordinates, setUseCoordinates] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (useCoordinates) {
      if (latitude.trim() && longitude.trim()) {
        onSearch(`${latitude.trim()}, ${longitude.trim()}`);
      }
    } else {
      if (location.trim()) {
        onSearch(location.trim());
      }
    }
  };

  const handleCoordinateSearch = () => {
    if (latitude.trim() && longitude.trim()) {
      onSearch(`${latitude.trim()}, ${longitude.trim()}`);
    }
  };

  return (
    <div className="swiss-card p-8">
      <div className="space-y-6">
        {/* Location Search */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="location" className="block text-size-sm font-medium text-muted-foreground mb-3">
              Enter a location
            </label>
            <div className="flex space-x-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, ZIP code, landmark, or address"
                  className="pl-12 text-size-base h-12 bg-background border-border/30"
                  disabled={loading}
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading || !location.trim()}
                className="px-8 h-12 font-medium"
              >
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </div>
        </form>
        
        {/* Coordinate Input Toggle */}
        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setUseCoordinates(!useCoordinates)}
            className="text-size-sm text-muted-foreground hover:text-foreground"
          >
            {useCoordinates ? 'Use location search instead' : 'Use coordinates instead'}
          </Button>
        </div>
        
        {/* Coordinate Inputs */}
        {useCoordinates && (
          <div className="space-y-4 pt-4 border-t border-border/20">
            <label className="block text-size-sm font-medium text-muted-foreground">
              Enter GPS coordinates
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="latitude" className="block text-size-xs text-muted-foreground mb-2">
                  Latitude
                </label>
                <Input
                  id="latitude"
                  type="number"
                  step="any"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="e.g., 40.7128"
                  className="text-size-base h-11"
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="longitude" className="block text-size-xs text-muted-foreground mb-2">
                  Longitude
                </label>
                <Input
                  id="longitude"
                  type="number"
                  step="any"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="e.g., -74.0060"
                  className="text-size-base h-11"
                  disabled={loading}
                />
              </div>
            </div>
            <Button
              onClick={handleCoordinateSearch}
              disabled={loading || !latitude.trim() || !longitude.trim()}
              className="w-full h-11 font-medium"
            >
              Search by Coordinates
            </Button>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onGeolocation}
            disabled={loading}
            className="text-size-sm inline-flex items-center space-x-2 h-11 px-6"
          >
            <MapPin className="h-4 w-4" />
            <span>Use my current location</span>
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={onVoiceSearch}
            disabled={loading}
            className="text-size-sm inline-flex items-center space-x-2 h-11 px-6"
            title="Voice Search"
          >
            <Mic className="h-4 w-4" />
            <span>Voice search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
