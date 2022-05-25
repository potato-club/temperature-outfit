import cuid from 'cuid';
import multer from 'multer';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import path from 'path';
import { prisma } from '../../../db';
import {
  OutfitGetRequest,
  OutfitPostRequest,
  OutfitResponse,
} from '../../../types';
import { convertOutfitToResponse } from '../../../utilities/api/converter';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { SupabaseStorageEngine } from '../../../utilities/api/multer/supabaseStorageEngine';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<OutfitResponse[]>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const body = req.body as OutfitGetRequest;

  body.page = body.page ?? 1;
  body.limit = Math.min(body.limit ?? 10, 100);

  const outfits = await prisma.outfit.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      createdAt: {
        gte: body.startDate ? new Date(body.startDate) : undefined,
        lte: body.endDate ? new Date(body.endDate) : undefined,
      },
    },
    include: {
      products: true,
    },
    skip: (body.page - 1) * body.limit,
    take: body.limit,
  });

  res
    .status(200)
    .json(
      outfits.map<OutfitResponse>((outfit) => convertOutfitToResponse(outfit)),
    );
});

handler.post(
  multer({
    storage: new SupabaseStorageEngine({
      bucket: 'image',
      filename: (_, file) => `${cuid()}${path.extname(file.originalname)}`,
    }),
  }).single('file'),
  async (req, res) => {
    const body = req.body as OutfitPostRequest;

    const outfit = await prisma.outfit.create({
      data: {
        owner: { connect: { email: req?.session?.user?.email ?? '' } },
        imageUrl: req.file?.path,
        products: { connect: body.productsId.map((id) => ({ id })) },
      },
      include: { products: true },
    });

    res.status(201).json([convertOutfitToResponse(outfit)]);
  },
);

export default handler;
