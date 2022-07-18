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
      children: { select: { id: true, name: true }, orderBy: { order: 'asc' } },
    },
    where: {
      parentId: null,
    },
    orderBy: { order: 'asc' },
  });

  res.status(200).json(categories);
}
