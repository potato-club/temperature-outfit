import { prisma } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  SuggestionGetRequest,
  SuggestionOutfit,
  SuggestionResponse,
} from 'types';
import { updateWeather } from 'utilities/api/weather';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuggestionResponse>,
) {
  const query = req.query as SuggestionGetRequest;

  if (!query.temperature || typeof query.temperature != 'number') {
    // 필수 쿼리
    return res.status(400);
  }

  //   const today = new Date();

  const result: SuggestionOutfit[] = await prisma.$queryRawUnsafe(
    `SELECT a.id, a."imageUrl", a.rating, b.temperature FROM "Outfit" as a JOIN "Weather" as b ON (a.date = b.date AND a."locationId" = b."locationId") ORDER BY abs(${Number(
      query.temperature,
    )} - b.temperature) LIMIT 5`,
  );

  result.sort((a, b) => b.rating - a.rating);

  return res.json({ outfits: result });
}
