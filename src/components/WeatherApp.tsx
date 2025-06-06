import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Header } from './weather/Header';
import { LocationInput } from './weather/LocationInput';
import { RecentSearches } from './weather/RecentSearches';
import { CurrentWeather } from './weather/CurrentWeather';
import { WeatherInsights } from './weather/WeatherInsights';
import { ForecastCards } from './weather/ForecastCards';
import { AnimatedBackground } from './weather/AnimatedBackground';
import { MiniMap } from './weather/MiniMap';
import { FunWeatherFact } from './weather/FunWeatherFact';
import { WeatherStreaks } from './weather/WeatherStreaks';
import { Footer } from './weather/Footer';
import { InfoModal } from './weather/InfoModal';
import { TechStackModal } from './weather/TechStackModal';
import { useToast } from '@/hooks/use-toast';
import { geocodeLocation, fetchWeatherData, getWeatherDescription } from '@/services/weatherService';

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  icon: string;
  confidence: number;
  coordinates?: { lat: number; lng: number };
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
  const [techStackModalOpen, setTechStackModalOpen] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
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
      // Geocode the location
      const geocodeResult = await geocodeLocation(location);
      
      if (!geocodeResult) {
        toast({
          title: "Location Not Found",
          description: "Could not find the specified location. Try entering coordinates (e.g., 40.7128, -74.0060) or a more specific location name.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Fetch weather data
      const weatherResponse = await fetchWeatherData(geocodeResult.lat, geocodeResult.lng);
      
      if (!weatherResponse) {
        toast({
          title: "Weather Data Unavailable",
          description: "Unable to fetch weather data for this location. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Transform API response to app format
      const weatherInfo = getWeatherDescription(weatherResponse.current.weather_code);
      
      const weatherData: WeatherData = {
        location: geocodeResult.name,
        temperature: Math.round(weatherResponse.current.temperature_2m),
        condition: weatherInfo.condition,
        humidity: weatherResponse.current.relative_humidity_2m,
        windSpeed: Math.round(weatherResponse.current.wind_speed_10m),
        precipitation: Math.round(weatherResponse.current.precipitation),
        icon: weatherInfo.icon,
        confidence: 95,
        coordinates: { lat: geocodeResult.lat, lng: geocodeResult.lng }
      };

      // Transform forecast data
      const forecastData: ForecastData[] = weatherResponse.daily.time.slice(0, 5).map((date, index) => {
        const forecastInfo = getWeatherDescription(weatherResponse.daily.weather_code[index]);
        return {
          date,
          minTemp: Math.round(weatherResponse.daily.temperature_2m_min[index]),
          maxTemp: Math.round(weatherResponse.daily.temperature_2m_max[index]),
          condition: forecastInfo.condition,
          icon: forecastInfo.icon
        };
      });

      setWeatherData(weatherData);
      setForecastData(forecastData);
      setSearchCount(prev => prev + 1);
      
      // Add to recent searches
      setRecentSearches(prev => {
        const updated = [location, ...prev.filter(s => s !== location)].slice(0, 5);
        return updated;
      });

      toast({
        title: "Weather Updated",
        description: `Successfully loaded weather for ${geocodeResult.name}`,
      });
    } catch (error) {
      console.error('Weather fetch error:', error);
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

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Voice Search Not Supported",
        description: "Please enter a location manually.",
        variant: "destructive",
      });
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.onresult = (event) => {
      const location = event.results[0][0].transcript;
      handleLocationSearch(location);
    };
    
    recognition.onerror = () => {
      toast({
        title: "Voice Recognition Failed",
        description: "Please try again or enter location manually.",
        variant: "destructive",
      });
    };
    
    recognition.start();
  };

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download would start here. Please contact for actual resume.",
    });
  };

  return (
    <div className="min-h-screen weather-gradient relative overflow-hidden">
      {weatherData && (
        <AnimatedBackground condition={weatherData.condition} />
      )}
      
      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
        <Header
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          fontScale={fontScale}
          onFontScaleChange={setFontScale}
          onInfoClick={() => setInfoModalOpen(true)}
        />
        
        <div className="space-y-12">
          <LocationInput
            onSearch={handleLocationSearch}
            onGeolocation={handleGeolocation}
            onVoiceSearch={handleVoiceSearch}
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
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3 space-y-12">
                  <CurrentWeather data={weatherData} />
                  <WeatherInsights location={weatherData.location} />
                  {forecastData.length > 0 && (
                    <ForecastCards data={forecastData} />
                  )}
                </div>
                
                <div className="lg:col-span-1 space-y-8">
                  {weatherData.coordinates && (
                    <MiniMap coordinates={weatherData.coordinates} />
                  )}
                  <FunWeatherFact />
                  <WeatherStreaks searchCount={searchCount} />
                </div>
              </div>
            </>
          )}
          
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setTechStackModalOpen(true)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-size-base"
            >
              Tech Stack Spotlight
            </button>
          </div>
        </div>
        
        <Footer />
      </div>
      
      <InfoModal
        open={infoModalOpen}
        onOpenChange={setInfoModalOpen}
      />
      
      <TechStackModal
        open={techStackModalOpen}
        onOpenChange={setTechStackModalOpen}
      />
    </div>
  );
};

export default WeatherApp;
