import cuid from 'cuid';
import multer from 'multer';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import path from 'path';
import { prisma } from '../../../db';
import {
  ProductResponse,
  ProductGetRequest,
  ProductPostRequest,
} from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { SupabaseStorageEngine } from '../../../utilities/api/multer/supabaseStorageEngine';
import { convertProductToResponse } from './../../../utilities/api/converter';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<
  NextApiRequestWithSession,
  NextApiResponse<ProductResponse[]>
>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const body = req.body as ProductGetRequest;

  body.page = body.page ?? 1;
  body.limit = Math.min(body.limit ?? 10, 100);

  const category = await prisma.category.findUnique({
    where: { id: body.categoryId },
    include: { children: true },
  });

  const childrenCategoryId = category?.children?.map((c) => c.id);

  const products = await prisma.product.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      name: { contains: body.query },
      category: { id: { in: childrenCategoryId } },
      color: { in: body.color },
    },
    skip: (body.page - 1) * body.limit,
    take: body.limit,
  });

  res
    .status(200)
    .json(
      products.map<ProductResponse>((product) =>
        convertProductToResponse(product),
      ),
    );
});

handler.post(
  multer({
    storage: new SupabaseStorageEngine({
      bucket: 'image',
      filename: (_, file) => `${cuid()}${path.extname(file.originalname)}`,
    }),
  }).single('file'),
  async (req, res) => {
    const body = req.body as ProductPostRequest;

    const product = await prisma.product.create({
      data: {
        name: body.name,
        category: { connect: { id: body.categoryId } },
        color: body.color,
        imageUrl: req.file?.path,
        owner: { connect: { email: req?.session?.user?.email ?? '' } },
      },
    });

    res.status(201).json([convertProductToResponse(product)]);
  },
);

export default handler;
