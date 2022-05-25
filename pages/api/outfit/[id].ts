import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { OutfitResponse } from '../../../types';
import { convertProductToResponse } from './../../../utilities/api/converter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OutfitResponse>,
) {
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
}
