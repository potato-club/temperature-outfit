import type { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { prisma } from '../../../db';
import {
  ProductResponse,
  ProductGetRequest,
  ApiRequest,
  ProductPostRequest,
} from '../../../types';
import { authenticateHandler } from '../../../utilities/api/middlewares/auth';
import { convertProductToResponse } from './../../../utilities/api/converter';
import { filesParser } from './../../../utilities/api/middlewares/fileParser';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<ApiRequest, NextApiResponse<ProductResponse[]>>();

handler.use(authenticateHandler);

handler.get(async (req, res) => {
  const query = req.query as ProductGetRequest;

  query.page = query.page ?? 1;
  query.limit = Math.min(query.limit ?? 10, 100);

  const category = query.categoryId
    ? await prisma.category.findUnique({
        where: { id: query.categoryId },
        include: { children: true },
      })
    : undefined;

  const childrenCategoryId = category?.children
    ?.map((c) => c.id)
    .concat(category.id);

  const products = await prisma.product.findMany({
    where: {
      owner: { email: req?.session?.user?.email },
      name: { contains: query.query },
      category: { id: { in: childrenCategoryId } },
      color: { equals: query.color },
    },
    skip: (query.page - 1) * query.limit,
    take: query.limit,
  });

  res
    .status(200)
    .json(
      products.map<ProductResponse>((product) =>
        convertProductToResponse(product),
      ),
    );
});

handler.post(filesParser, async (req, res) => {
  const body = req.body as ProductPostRequest;

  const product = await prisma.product.create({
    data: {
      name: body.name,
      category: { connect: { id: body.categoryId } },
      color: body.color,
      imageUrl: req.file?.filepath,
      owner: { connect: { email: req?.session?.user?.email ?? '' } },
    },
  });

  res.status(201).json([convertProductToResponse(product)]);
});

export default handler;
