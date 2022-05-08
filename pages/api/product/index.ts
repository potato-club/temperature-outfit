import cuid from 'cuid';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nextConnect from 'next-connect';
import path from 'path';
import { prisma } from '../../../db';
import { SupabaseStorageEngine } from '../../../utilities/multer/supabaseStorageEngine';
import type { ProductResponse } from './[id]';

export const config = {
  api: {
    bodyParser: false,
  },
};

export type ProductsResponse = {
  products: ProductResponse[];
};

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    return res.status(401);
  }

  const products = await prisma.product.findMany({
    where: { owner: { email: session.user.email } },
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

// 인증 미들웨어 분리, multer보다 먼저 와야 함
handler.post(
  multer({
    storage: new SupabaseStorageEngine({
      bucket: 'image',
      filename: (_, file) => `${cuid()}${path.extname(file.originalname)}`,
    }),
  }).single('file'),
  async (req, res) => {
    const session = await getSession({ req });

    if (!session?.user?.email) {
      return res.status(401);
    }

    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        color: req.body.color,
        imageUrl: req.file?.path,
        owner: { connect: { email: session.user.email } },
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
