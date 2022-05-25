import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { ProductResponse } from '../../../types';
import { convertProductToResponse } from './../../../utilities/api/converter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>,
) {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    return res.status(404);
  }

  res.status(200).json(convertProductToResponse(product));
}
