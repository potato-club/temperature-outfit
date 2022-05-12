import cuid from 'cuid';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nextConnect from 'next-connect';
import path from 'path';
import { prisma } from '../../../db';
import {
  authenticateHandler,
  NextApiRequestWithSession,
} from '../../../utilities/api/middlewares/auth';
import { SupabaseStorageEngine } from '../../../utilities/api/multer/supabaseStorageEngine';
import type { ProductResponse } from './[id]';

export const config = {
  api: {
    bodyParser: false,
  },
};

export type ProductsResponse = {
  products: ProductResponse[];
};

const handler = nextConnect<NextApiRequestWithSession, NextApiResponse>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const products = await prisma.product.findMany({
    where: { owner: { email: req?.session?.user?.email } },
  });

  res.status(200).json({
    products: products.map<ProductResponse>((value) => ({
      id: value.id,
      name: value.name,
      color: value.color,
      imageUrl: value.imageUrl ?? '',
    })),
  });
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
        color: req.body.color,
        imageUrl: req.file?.path,
        owner: { connect: { email: req?.session?.user?.email ?? '' } },
      },
    });

    res.status(201).json({
      products: [
        {
          id: product.id,
          name: product.name,
          color: product.color,
          imageUrl: product.imageUrl,
        },
      ],
    });
  },
);

handler.put(async (req, res) => {
  res.end();
});

export default handler;
