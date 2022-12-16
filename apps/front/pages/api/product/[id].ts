import { prisma } from 'db';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { convertProductToResponse } from 'utilities/api/converter';
import { authenticateHandler, NextApiRequestWithSession } from 'utilities/api/middlewares/auth';
import { filesParser } from 'utilities/api/middlewares/fileParser';
import { ProductPutRequest, ProductDetailResponse } from '../../../src/types';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<ProductDetailResponse>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400).json({
      code: 400,
      message: '요청 오류',
    });
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: { owner: { select: { email: true } } },
  });

  if (!product || req.session?.user?.email !== product.owner.email) {
    return res.status(404).json({
      code: 404,
      message: '데이터 없음',
    });
  }

  res.status(200).json(convertProductToResponse(product));
});

handler.put(filesParser, async (req, res) => {
  const { id } = req.query;
  const body = req.body as ProductPutRequest;

  if (Array.isArray(id)) {
    return res.status(400).json({
      code: 400,
      message: '요청 오류',
    });
  }

  if (
    (
      await prisma.product.findUnique({
        where: { id: id },
        include: { owner: true },
      })
    )?.owner.email !== req.session.user?.email
  ) {
    return res.status(404).json({
      code: 404,
      message: '데이터 없음',
    });
  }

  const product = await prisma.product.update({
    where: { id: id },
    data: {
      name: body.name,
      category: { connect: { id: body.categoryId } },
      color: body.color,
      imageUrl: req.filePath,
    },
  });

  res.status(200).json(convertProductToResponse(product));
});

handler.delete(async (req, res) => {
  const { id } = req.query;

  if (Array.isArray(id)) {
    return res.status(400).json({
      code: 400,
      message: '요청 오류',
    });
  }

  if (
    (
      await prisma.product.findUnique({
        where: { id: id },
        include: { owner: true },
      })
    )?.owner.email !== req.session.user?.email
  ) {
    return res.status(404).json({
      code: 404,
      message: '데이터 없음',
    });
  }

  const product = await prisma.product.delete({
    where: { id: id },
  });

  res.status(200).json(convertProductToResponse(product));
});

export default handler;
