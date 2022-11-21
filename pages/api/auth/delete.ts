import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { ApiRequest, Response } from 'types';
import { authenticateHandler } from 'utilities/api/middlewares/auth';
import { prisma } from '../../../src/db';

const handler = nextConnect<ApiRequest, NextApiResponse<Response>>();

handler.use(authenticateHandler);

handler.delete(async (req, res) => {
  const user = await prisma.user.delete({
    where: { email: req.session?.user?.email ?? '' },
  });

  if (user) {
    res.status(200).json({ message: '계정 삭제 완료' });
  } else {
    res.status(404).json({ code: 404, message: '계정을 찾을 수 없음' });
  }
});

export default handler;
