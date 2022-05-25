import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductResponse } from '../../../types';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>,
) {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  const product = await prisma.product.findUnique({ where: { id } });

  res.status(200).json({
    id: product?.id ?? '',
    name: product?.name ?? '',
    categoryId: product?.categoryId ?? '',
    color: product?.color ?? '',
    imageUrl: product?.imageUrl ?? undefined,
  });
}
