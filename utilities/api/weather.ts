import axios from 'axios';

type RawWeather = {
  temperature: number;
  lowestTemperature: number;
  highestTemperature: number;
  feelsLike: number;
  humidity: number;
};

export const getCurrentWeather = async (
  latitude: number,
  longitude: number,
): Promise<RawWeather> => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=metric`,
  );

  return {
    temperature: res.data.main.temp,
    lowestTemperature: res.data.main.temp_min,
    highestTemperature: res.data.main.temp_max,
    feelsLike: res.data.main.feels_like,
    humidity: res.data.main.humidity,
  };
};
