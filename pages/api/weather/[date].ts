import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setTimeout } from 'timers/promises';
import { prisma } from '../../../db';
import { LocationResponse } from '../../../types';

const GetWeather = async (latitude: number, longitude: number) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=71e3b88e499e50437afd27dd91ffaeb4&units=metric`,
  );

  return {
    temperature: res.data.main.temp,
    lowestTemperature: res.data.main.temp_min,
    highestTemperature: res.data.main.temp_max,
    feelsLike: res.data.main.feels_like,
    humidity: res.data.main.humidity,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationResponse[]>,
) {
  const date = new Date(req.query.date as string);

  const locations = await prisma.location.findMany();

  for (const location of locations) {
    const weather = await prisma.weather.findFirst({
      where: { date, locationId: location.id },
    });

    if (weather) {
      if (
        new Date().getTime() - weather.updatedAt.getTime() <=
        1000 * 60 * 10
      ) {
        continue;
      }

      await prisma.weather.update({
        where: { id: weather.id },
        data: await GetWeather(location.latitude, location.longitude),
      });
    } else {
      await prisma.weather.create({
        data: {
          date,
          locationId: location.id,
          ...(await GetWeather(location.latitude, location.longitude)),
        },
      });
    }

    await setTimeout(1000);
  }

  res.status(200).json(locations);
}
