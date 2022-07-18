import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import {
  ApiRequest,
  OutfitGetRequest,
  OutfitPostRequest,
  OutfitResponse,
} from '../../../types';
import { convertOutfitToResponse } from '../../../utilities/api/converter';
import { authenticateHandler } from '../../../utilities/api/middlewares/auth';
import { filesParser } from './../../../utilities/api/middlewares/fileParser';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<ApiRequest, NextApiResponse<OutfitResponse[]>>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const body = req.body as OutfitGetRequest;

  const outfits = await prisma.outfit.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      date: {
        gte: body.startDate ? new Date(body.startDate) : undefined,
        lte: body.endDate ? new Date(body.endDate) : undefined,
      },
      rating: {
        gte: body.minRating,
        lte: body.maxRating,
      },
    },
    include: {
      products: true,
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

  if (!body.date) {
    return res.status(400);
  }

  const outfit = await prisma.outfit.create({
    data: {
      owner: { connect: { email: req?.session?.user?.email ?? '' } },
      date: new Date(body.date),
      imageUrl: req.file?.filepath,
      products: { connect: body.productsId?.map((id) => ({ id })) },
      comment: body.comment,
      rating: body.rating,
    },
    include: { products: true },
  });

  res.status(201).json([convertOutfitToResponse(outfit)]);
});

export default handler;
