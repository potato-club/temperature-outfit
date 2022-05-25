import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoryResponse } from '../../types';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryResponse[]>,
) {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      order: true,
      children: { select: { id: true, name: true, order: true } },
    },
  });

  res.status(200).json(categories);
}
