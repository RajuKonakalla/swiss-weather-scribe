
interface GeocodeResult {
  lat: number;
  lng: number;
  name: string;
  country?: string;
  admin1?: string;
}

interface WeatherResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

const WEATHER_CODES: { [key: number]: { condition: string; icon: string } } = {
  0: { condition: 'Clear Sky', icon: 'sun' },
  1: { condition: 'Mainly Clear', icon: 'sun' },
  2: { condition: 'Partly Cloudy', icon: 'cloud-sun-rain' },
  3: { condition: 'Overcast', icon: 'cloud-sun-rain' },
  45: { condition: 'Fog', icon: 'cloud-sun-rain' },
  48: { condition: 'Depositing Rime Fog', icon: 'cloud-sun-rain' },
  51: { condition: 'Light Drizzle', icon: 'cloud-sun-rain' },
  53: { condition: 'Moderate Drizzle', icon: 'cloud-sun-rain' },
  55: { condition: 'Dense Drizzle', icon: 'cloud-sun-rain' },
  61: { condition: 'Slight Rain', icon: 'cloud-sun-rain' },
  63: { condition: 'Moderate Rain', icon: 'cloud-sun-rain' },
  65: { condition: 'Heavy Rain', icon: 'cloud-sun-rain' },
  71: { condition: 'Slight Snow', icon: 'cloud-sun-rain' },
  73: { condition: 'Moderate Snow', icon: 'cloud-sun-rain' },
  75: { condition: 'Heavy Snow', icon: 'cloud-sun-rain' },
  95: { condition: 'Thunderstorm', icon: 'cloud-sun-rain' },
  96: { condition: 'Thunderstorm with Hail', icon: 'cloud-sun-rain' },
  99: { condition: 'Thunderstorm with Heavy Hail', icon: 'cloud-sun-rain' },
};

export const geocodeLocation = async (location: string): Promise<GeocodeResult | null> => {
  try {
    // Check if input is coordinates (lat,lng format)
    const coordMatch = location.match(/^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)$/);
    if (coordMatch) {
      const lat = parseFloat(coordMatch[1]);
      const lng = parseFloat(coordMatch[2]);
      return { lat, lng, name: `${lat.toFixed(2)}, ${lng.toFixed(2)}` };
    }

    // Try Open-Meteo geocoding first
    const openMeteoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`;
    const openMeteoResponse = await fetch(openMeteoUrl);
    const openMeteoData = await openMeteoResponse.json();

    if (openMeteoData.results && openMeteoData.results.length > 0) {
      const result = openMeteoData.results[0];
      return {
        lat: result.latitude,
        lng: result.longitude,
        name: result.name,
        country: result.country,
        admin1: result.admin1
      };
    }

    // Fallback to Nominatim (OpenStreetMap)
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`;
    const nominatimResponse = await fetch(nominatimUrl);
    const nominatimData = await nominatimResponse.json();

    if (nominatimData && nominatimData.length > 0) {
      const result = nominatimData[0];
      return {
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        name: result.display_name.split(',')[0]
      };
    }

    return null;
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};

export const fetchWeatherData = async (lat: number, lng: number): Promise<WeatherResponse | null> => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.reason || 'Weather API error');
    }
    
    return data;
  } catch (error) {
    console.error('Weather API error:', error);
    return null;
  }
};

export const getWeatherDescription = (weatherCode: number): { condition: string; icon: string } => {
  return WEATHER_CODES[weatherCode] || { condition: 'Unknown', icon: 'cloud-sun-rain' };
};
