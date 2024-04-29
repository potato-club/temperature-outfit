import { prisma } from 'db';
import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import {
  ProductDetailResponse,
  ProductGetRequest,
  ApiRequest,
  ProductPostRequest,
  ProductResponse,
} from '../../../src/types';
import { authenticateHandler } from 'utilities/api/middlewares/auth';
import { convertProductToResponse } from 'utilities/api/converter';
import { filesParser } from 'utilities/api/middlewares/fileParser';

export const config = {
  api: {
    bodyParser: false,
  },
};

const createDefaultProduct = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.init) {
    return;
  }

  const defaultProducts = await prisma.defaultProduct.findMany();

  const creates = defaultProducts.map((product) =>
    prisma.product.create({
      data: {
        owner: { connect: { id: user.id } },
        name: product.name,
        category: { connect: { id: product.categoryId } },
        color: product.color,
        imageUrl: product.imageUrl,
      },
    }),
  );

  await prisma.$transaction([
    ...creates,
    prisma.user.update({
      where: { id: user.id },
      data: { init: true },
    }),
  ]);
};

const handler = nextConnect<ApiRequest, NextApiResponse<ProductResponse>>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  // TODO: 임시 구현
  await createDefaultProduct(req.session?.user?.email!);

  const query = req.query as ProductGetRequest;

  const page = +(query.page ?? '1');
  const limit = Math.min(+(query.limit ?? '10'), 100);

  const category = query.categoryId
    ? await prisma.category.findUnique({
        where: { id: query.categoryId },
        include: { children: true },
      })
    : undefined;

  const childrenCategoryId = category?.children
    ?.map((c) => c.id)
    .concat(category.id);

  const where = {
    owner: { email: req?.session?.user?.email },
    name: { contains: query.query },
    category: { id: { in: childrenCategoryId } },
    color: { equals: query.color !== '' ? query.color : undefined },
  };

  const [count, products] = await prisma.$transaction([
    prisma.product.count({
      where,
    }),
    prisma.product.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    }),
  ]);

  res.status(200).json({
    page: page,
    lastPage: Math.ceil(count / limit),
    limit: limit,
    products: products.map<ProductDetailResponse>((product) =>
      convertProductToResponse(product),
    ),
  });
});

handler.post(filesParser, async (req, res) => {
  const body = req.body as ProductPostRequest;

  const product = await prisma.product.create({
    data: {
      name: body.name,
      category: { connect: { id: body.categoryId } },
      color: body.color,
      imageUrl: req.filePath,
      owner: { connect: { email: req?.session?.user?.email ?? '' } },
    },
  });

  res.status(201).json({
    products: [convertProductToResponse(product)],
  });
});

export default handler;
