import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import { OutfitPutRequest, OutfitResponse } from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { convertOutfitToResponse } from './../../../utilities/api/converter';
import { filesParser } from './../../../utilities/api/middlewares/fileParser';

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    include: { products: true, weather: true },
  });

  if (!outfit) {
    return res.status(404);
  }

  res.status(200).json(convertOutfitToResponse(outfit));
});

handler.put(filesParser, async (req, res) => {
  const { id } = req.query;
  const body = req.body as OutfitPutRequest;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  if (
    (
      await prisma.outfit.findUnique({
        where: { id: id },
        include: { owner: true },
      })
    )?.owner.email !== req.session.user?.email
  ) {
    return res.status(404);
  }

  const outfit = await prisma.outfit.update({
    where: { id: id },
    data: {
      date: body.date ? new Date(body.date) : undefined,
      imageUrl: req.file?.filepath,
      products: body.productsId
        ? {
            set: [],
            connect: body.productsId.split(',').map((id) => ({ id })),
          }
        : undefined,
      comment: body.comment,
      rating: body.rating ? +body.rating : undefined,
    },
    include: { products: true, weather: true },
  });

  res.status(200).json(convertOutfitToResponse(outfit));
});

handler.delete(async (req, res) => {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400);
  }

  if (
    (
      await prisma.outfit.findUnique({
        where: { id: id },
        include: { owner: true },
      })
    )?.owner.email !== req.session.user?.email
  ) {
    return res.status(404);
  }

  const outfit = await prisma.outfit.delete({
    where: { id: id },
    include: { products: true, weather: true },
  });

  res.status(200).json(convertOutfitToResponse(outfit));
});

export default handler;
