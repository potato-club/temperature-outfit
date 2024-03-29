import { prisma } from 'db';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { convertOutfitToResponse } from 'utilities/api/converter';
import { authenticateHandler } from 'utilities/api/middlewares/auth';
import { filesParser } from 'utilities/api/middlewares/fileParser';
import {
  ApiRequest,
  OutfitGetRequest,
  OutfitPostRequest,
  OutfitResponse,
  Response
} from '../../../src/types';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<
  ApiRequest,
  NextApiResponse<OutfitResponse[] | Response>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const query = req.query as OutfitGetRequest;

  const outfits = await prisma.outfit.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      date: {
        gte: query.startDate ? new Date(query.startDate) : undefined,
        lte: query.endDate ? new Date(query.endDate) : undefined,
      },
    },
    include: {
      products: true,
      weather: true,
    },
  });

  res
    .status(200)
    .json(
      outfits.map<OutfitResponse>((outfit) => convertOutfitToResponse(outfit)),
    );
});

handler.post(filesParser, async (req, res) => {
  const body = req.body as OutfitPostRequest;

  if (!body.date || !body.locationId) {
    return res.status(400).json({
      code: 400,
      message: '요청 오류',
    });
  }

  const outfit = await prisma.outfit.create({
    data: {
      owner: { connect: { email: req?.session?.user?.email ?? '' } },
      weather: {
        connect: {
          date_locationId: {
            date: new Date(body.date),
            locationId: +body.locationId,
          },
        },
      },
      imageUrl: req.filePath,
      products: {
        connect: body.productsId?.split(',').map((id) => ({ id })),
      },
      comment: body.comment,
      rating: +(body.rating ?? '0'),
    },
    include: { products: true, weather: true },
  });

  res.status(201).json([convertOutfitToResponse(outfit)]);
});

export default handler;
