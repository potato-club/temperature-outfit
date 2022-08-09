import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../db';
import { LocationResponse } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LocationResponse[]>,
) {
  const locations = await prisma.location.findMany({
    select: { id: true, name: true },
  });

  res.status(200).json(locations);
}
