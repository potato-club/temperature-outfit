import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import { OutfitResponse } from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { convertProductToResponse } from './../../../utilities/api/converter';

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<OutfitResponse>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  const outfit = await prisma.outfit.findUnique({
    where: { id },
    include: { products: true },
  });

  if (!outfit) {
    return res.status(404);
  }

  res.status(200).json({
    id: outfit.id,
    imageUrl: outfit.imageUrl ?? undefined,
    products: outfit.products.map((product) =>
      convertProductToResponse(product),
    ),
    createdAt: outfit.createdAt.toISOString(),
    updatedAt: outfit.updatedAt.toISOString(),
  });
});

export default handler;
