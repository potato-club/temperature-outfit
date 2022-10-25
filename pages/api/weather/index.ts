import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/index';
import { WeatherGetRequest, WeatherResponse } from '../../../types';
import { updateWeather } from '../../../utilities/api/weather';
import { convertWeatherResponse } from '../../../utilities/api/converter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResponse>,
) {
  const query = req.query as WeatherGetRequest;

  if (!query.date || !query.locationId) {
    // 필수 쿼리
    return res.status(400);
  }

  const date = new Date(query.date);
  const location = await prisma.location.findUnique({
    where: { id: +query.locationId },
  });

  const today = new Date();

  if (
    date.getFullYear > today.getFullYear ||
    date.getMonth > today.getMonth ||
    date.getDate > today.getDate
  ) {
    // 미래 날짜 오류
    return res.status(400);
  }

  if (!location) {
    // 지역 없음
    return res.status(400);
  }

  let result = await updateWeather(date, location, today);

  res.status(200).json(convertWeatherResponse(result));
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<LocationResponse[]>,
// ) {
//   const date = new Date(req.query.date as string);

//   const locations = await prisma.location.findMany();

//   for (const location of locations) {
//     const weather = await prisma.weather.findFirst({
//       where: { date, locationId: location.id },
//     });

//     if (weather) {
//       if (
//         new Date().getTime() - weather.updatedAt.getTime() <=
//         1000 * 60 * 10
//       ) {
//         continue;
//       }

//       await prisma.weather.update({
//         where: { id: weather.id },
//         data: await getCurrentWeather(location.latitude, location.longitude),
//       });
//     } else {
//       await prisma.weather.create({
//         data: {
//           date,
//           locationId: location.id,
//           ...(await getCurrentWeather(location.latitude, location.longitude)),
//         },
//       });
//     }

//     await setTimeout(1000);
//   }

//   res.status(200).json(locations);
// }
