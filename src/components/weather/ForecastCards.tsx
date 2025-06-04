
import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning, CloudSnow } from 'lucide-react';
import type { ForecastData } from '../WeatherApp';

interface ForecastCardsProps {
  data: ForecastData[];
}

const getWeatherIcon = (condition: string) => {
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
    return Sun;
  }
  if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
    return CloudLightning;
  }
  if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
    return CloudRain;
  }
  if (lowerCondition.includes('snow') || lowerCondition.includes('blizzard')) {
    return CloudSnow;
  }
  if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
    return Cloud;
  }
  
  // Default fallback
  return Cloud;
};

export const ForecastCards: React.FC<ForecastCardsProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  };

  return (
    <div className="swiss-card p-6">
      <h3 className="text-size-lg font-medium mb-6">5-Day Forecast</h3>
      
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {data.map((forecast, index) => {
          const dateInfo = formatDate(forecast.date);
          const IconComponent = getWeatherIcon(forecast.condition);
          
          return (
            <div
              key={index}
              className="flex-shrink-0 w-32 p-4 rounded-lg bg-secondary/30 text-center space-y-3"
            >
              <div className="text-size-sm font-medium">
                {dateInfo.weekday}
              </div>
              <div className="text-size-xs text-muted-foreground">
                {dateInfo.month} {dateInfo.day}
              </div>
              
              <div className="flex justify-center">
                <IconComponent className="w-8 h-8 text-weather-cloudy" />
              </div>
              
              <div className="space-y-1">
                <div className="text-size-lg font-light tabular-nums">
                  {forecast.maxTemp}°
                </div>
                <div className="text-size-sm text-muted-foreground tabular-nums">
                  {forecast.minTemp}°
                </div>
              </div>
              
              <div className="text-size-xs text-muted-foreground">
                {forecast.condition}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
