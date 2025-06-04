
import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { WeatherData } from '../WeatherApp';

interface CurrentWeatherProps {
  data: WeatherData;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const IconComponent = LucideIcons[data.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="swiss-card p-8">
      <h2 className="text-size-xl font-medium mb-6">Current Weather</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Temperature */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-6 mb-6">
            {IconComponent && <IconComponent className="w-16 h-16 text-weather-cloudy" />}
            <div>
              <div className="text-6xl font-light tabular-nums">
                {data.temperature}°
              </div>
              <div className="text-size-lg text-muted-foreground">
                {data.condition}
              </div>
            </div>
          </div>
          
          <div className="text-size-2xl font-light text-muted-foreground mb-4">
            {data.location}
          </div>
          
          {/* Data Confidence Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-size-sm">
            Data Confidence: {data.confidence}%
          </div>
        </div>
        
        {/* Weather Details */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="text-size-sm text-muted-foreground">Humidity</div>
              <div className="text-size-2xl font-light">{data.humidity}%</div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="text-size-sm text-muted-foreground">Wind Speed</div>
              <div className="text-size-2xl font-light">{data.windSpeed} km/h</div>
            </div>
            
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="text-size-sm text-muted-foreground">Precipitation</div>
              <div className="text-size-2xl font-light">{data.precipitation}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
