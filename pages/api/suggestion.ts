import { Prisma } from '@prisma/client';
import { prisma } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SuggestionGetRequest } from 'types';
import { convertWeatherResponse } from 'utilities/api/converter';
import { updateWeather } from 'utilities/api/weather';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const query = req.query as SuggestionGetRequest;

  if (!query.locationId) {
    // 필수 쿼리
    return res.status(400).send('locationId 필요!');
  }

  const location = await prisma.location.findUnique({
    where: { id: +query.locationId },
  });

  if (!location) {
    // 지역 없음
    return res.status(400).send('locationId 오류!');
  }

  const today = new Date();

  let result = await updateWeather(today, location, today);

  const a: {
    id: string;
    imageUrl: string | null;
    rating: number;
    temperature: number;
  }[] = await prisma.$queryRawUnsafe(
    `SELECT a.id, a."imageUrl", a.rating FROM "Outfit" as a JOIN "Weather" as b ON (a.date = b.date AND a."locationId" = b."locationId") ORDER BY abs(${result.temperature} - b.temperature) LIMIT 5`,
  );

  a.sort((a, b) => b.rating - a.rating);

  return res.json(a);
}
