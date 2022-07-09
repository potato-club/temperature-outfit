import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import { ProductResponse } from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { convertProductToResponse } from './../../../utilities/api/converter';

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<ProductResponse>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: { owner: { select: { email: true } } },
  });

  if (!product || req.session?.user?.email !== product.owner.email) {
    return res.status(404);
  }

  res.status(200).json(convertProductToResponse(product));
});

export default handler;
