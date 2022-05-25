import cuid from 'cuid';
import multer from 'multer';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import path from 'path';
import { prisma } from '../../../db';
import { ProductResponse, ProductRequest } from '../../../types';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { SupabaseStorageEngine } from '../../../utilities/api/multer/supabaseStorageEngine';

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
  const query = req.query as ProductRequest;

  query.page = query.page ?? 1;
  query.limit = Math.min(query.limit ?? 10, 100);

  const category = await prisma.category.findUnique({
    select: { children: true },
    where: { id: query.categoryId },
  });

  const childrenCategoryId = category?.children?.map((c) => c.id);

  const products = await prisma.product.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      name: { contains: query.query },
      category: { id: { in: childrenCategoryId } },
      color: { in: query.color },
    },
    skip: (query.page - 1) * query.limit,
    take: query.limit,
  });

  res.status(200).json(
    products.map<ProductResponse>((product) => ({
      id: product.id,
      name: product.name,
      categoryId: product.categoryId,
      color: product.color,
      imageUrl: product.imageUrl ?? undefined,
    })),
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
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        category: { connect: { id: req.body.categoryId } },
        color: req.body.color,
        imageUrl: req.file?.path,
        owner: { connect: { email: req?.session?.user?.email ?? '' } },
      },
    });

    res.status(201).json([
      {
        id: product.id,
        name: product.name,
        categoryId: product.categoryId,
        color: product.color,
        imageUrl: product.imageUrl ?? undefined,
      },
    ]);
  },
);

export default handler;
