import { prisma } from 'db';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { authenticateHandler } from 'utilities/api/middlewares/auth';
import {
  ApiRequest,
  SuggestionGetRequest,
  SuggestionOutfit,
  SuggestionResponse,
} from '../../src/types';

const handler = nextConnect<ApiRequest, NextApiResponse<SuggestionResponse>>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const query = req.query as SuggestionGetRequest;

  const temperature = Number(query.temperature);

  // 리팩토링 해야 함.

  if (isNaN(temperature)) {
    return res.status(400).json({
      code: 400,
      message: '요청 오류',
    });
  }

  const userEmail = req.session!.user!.email;

  if (!userEmail) {
    return res.status(401).json({
      code: 401,
      message: '요청 오류',
    });
  }

  const user = await prisma.user.findUnique({ where: { email: userEmail } });

  if (!user) {
    return res.status(401).json({
      code: 401,
      message: '요청 오류',
    });
  }

  const result: SuggestionOutfit[] = await prisma.$queryRawUnsafe(
    `SELECT a.id, a."imageUrl", a.rating, b.temperature FROM "Outfit" as a JOIN "Weather" as b ON (a.date = b.date AND a."locationId" = b."locationId") WHERE a."ownerId" = '${user.id}' ORDER BY abs(${temperature} - b.temperature) LIMIT 5`,
  );

  result.sort((a, b) => b.rating - a.rating);

  return res.json({ outfits: result });
});

export default handler;
