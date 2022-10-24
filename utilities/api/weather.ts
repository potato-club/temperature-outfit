import { Location, Weather } from '@prisma/client';
import axios from 'axios';
import { prisma } from '../../db';

type RawWeather = {
  temperature: number;
  lowestTemperature: number;
  highestTemperature: number;
  humidity: number;
};

export const updateWeather = async (
  date: Date,
  location: Location,
  today: Date,
) => {
  const weather = await prisma.weather.findFirst({
    where: { date, locationId: location.id },
  });

  let result: Weather;

  if (weather) {
    if (
      !weather.isForecast ||
      today.getTime() - weather.updatedAt.getTime() <= 1000 * 60 * 10
    ) {
      result = weather;
    } else {
      result = await prisma.weather.update({
        where: {
          date_locationId: {
            date: weather.date,
            locationId: weather.locationId,
          },
        },
        data: await getCurrentWeather(location.latitude, location.longitude),
      });
    }
  } else {
    result = await prisma.weather.create({
      data: {
        date,
        locationId: location.id,
        ...(await getCurrentWeather(location.latitude, location.longitude)),
      },
    });
  }

  return result;
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
    humidity: res.data.main.humidity,
  };
};
