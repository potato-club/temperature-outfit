import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import { LocationResponse, UserLocationPostRequest } from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<LocationResponse>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { email: req.session?.user?.email ?? undefined },
    include: { location: { select: { id: true, name: true } } },
  });

  if (!user) {
    return res.status(403);
  }

  res.status(200).json(user.location);
});

handler.post(async (req, res) => {
  const body = req.body as UserLocationPostRequest;

  if (!body.locationId) {
    return res.status(400);
  }

  const user = await prisma.user.update({
    where: { email: req.session?.user?.email ?? undefined },
    include: { location: { select: { id: true, name: true } } },
    data: {
      location: { connect: { id: body.locationId } },
    },
  });

  if (!user) {
    return res.status(403);
  }

  res.status(200).json(user.location);
});

export default handler;
