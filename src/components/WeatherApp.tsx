
import React, { useState, useEffect } from 'react';
import { Header } from './weather/Header';
import { LocationInput } from './weather/LocationInput';
import { RecentSearches } from './weather/RecentSearches';
import { CurrentWeather } from './weather/CurrentWeather';
import { WeatherInsights } from './weather/WeatherInsights';
import { ForecastCards } from './weather/ForecastCards';
import { Footer } from './weather/Footer';
import { InfoModal } from './weather/InfoModal';
import { HireMeModal } from './weather/HireMeModal';
import { useToast } from '@/hooks/use-toast';

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  icon: string;
  confidence: number;
}

export interface ForecastData {
  date: string;
  minTemp: number;
  maxTemp: number;
  condition: string;
  icon: string;
}

const WeatherApp = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [hireMeModalOpen, setHireMeModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', fontScale.toString());
  }, [fontScale]);

  const handleLocationSearch = async (location: string) => {
    if (!location.trim()) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid location.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockWeather: WeatherData = {
        location: location,
        temperature: 22,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        precipitation: 10,
        icon: 'cloud-sun-rain',
        confidence: 94
      };

      const mockForecast: ForecastData[] = [
        { date: '2024-06-05', minTemp: 18, maxTemp: 25, condition: 'Sunny', icon: 'sun' },
        { date: '2024-06-06', minTemp: 20, maxTemp: 27, condition: 'Partly Cloudy', icon: 'cloud-sun-rain' },
        { date: '2024-06-07', minTemp: 16, maxTemp: 22, condition: 'Rainy', icon: 'cloud-sun-rain' },
        { date: '2024-06-08', minTemp: 19, maxTemp: 24, condition: 'Cloudy', icon: 'cloud-sun-rain' },
        { date: '2024-06-09', minTemp: 21, maxTemp: 26, condition: 'Sunny', icon: 'sun' }
      ];

      setWeatherData(mockWeather);
      setForecastData(mockForecast);
      
      // Add to recent searches
      setRecentSearches(prev => {
        const updated = [location, ...prev.filter(s => s !== location)].slice(0, 5);
        return updated;
      });

      toast({
        title: "Weather Updated",
        description: `Successfully loaded weather for ${location}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to fetch weather data. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation Not Supported",
        description: "Please enter a location manually.",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        handleLocationSearch(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
      },
      (error) => {
        toast({
          title: "Location Access Denied",
          description: "Please enter a location manually.",
          variant: "destructive",
        });
      }
    );
  };

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download would start here. Please contact for actual resume.",
    });
  };

  return (
    <div className="min-h-screen weather-gradient">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          fontScale={fontScale}
          onFontScaleChange={setFontScale}
          onInfoClick={() => setInfoModalOpen(true)}
        />
        
        <div className="space-y-8">
          <LocationInput
            onSearch={handleLocationSearch}
            onGeolocation={handleGeolocation}
            loading={loading}
          />
          
          {recentSearches.length > 0 && (
            <RecentSearches
              searches={recentSearches}
              onSearchSelect={handleLocationSearch}
            />
          )}
          
          {weatherData && (
            <>
              <CurrentWeather data={weatherData} />
              <WeatherInsights location={weatherData.location} />
              {forecastData.length > 0 && (
                <ForecastCards data={forecastData} />
              )}
            </>
          )}
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setHireMeModalOpen(true)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Why Hire Me?
            </button>
            <button
              onClick={downloadResume}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              Download Resume
            </button>
          </div>
        </div>
        
        <Footer />
      </div>
      
      <InfoModal
        open={infoModalOpen}
        onOpenChange={setInfoModalOpen}
      />
      
      <HireMeModal
        open={hireMeModalOpen}
        onOpenChange={setHireMeModalOpen}
      />
    </div>
  );
};

export default WeatherApp;
