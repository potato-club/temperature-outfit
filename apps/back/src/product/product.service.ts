import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ProductOneResponse,
  FindAllProductQuery,
  CreateProductBody,
  UpdateOneProductBody,
  ProductAllResponse,
} from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';
import { convertProductToResponse } from '../utilities/converter';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  createDefaultProduct = async (email: string) => {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || user.init) {
      return;
    }

    const defaultProducts = await this.prisma.defaultProduct.findMany();

    const creates = defaultProducts.map((product) =>
      this.prisma.product.create({
        data: {
          owner: { connect: { id: user.id } },
          name: product.name,
          category: { connect: { id: product.categoryId } },
          color: product.color,
          imageUrl: product.imageUrl,
        },
      }),
    );

    await this.prisma.$transaction([
      ...creates,
      this.prisma.user.update({
        where: { id: user.id },
        data: { init: true },
      }),
    ]);
  };

  async findAll(
    query: FindAllProductQuery,
    email: string,
  ): Promise<ProductAllResponse> {
    // TODO: 임시 구현
    await this.createDefaultProduct(email);

    const page = +(query.page ?? '1');
    const limit = Math.min(+(query.limit ?? '10'), 100);

    const category = query.categoryId
      ? await this.prisma.category.findUnique({
          where: { id: query.categoryId },
          include: { children: true },
        })
      : undefined;

    const childrenCategoryId = category?.children
      ?.map((c) => c.id)
      .concat(category.id);

    const where = {
      owner: { email: email },
      name: { contains: query.query },
      category: { id: { in: childrenCategoryId } },
      color: { equals: query.color !== '' ? query.color : undefined },
    };

    const [count, products] = await this.prisma.$transaction([
      this.prisma.product.count({
        where,
      }),
      this.prisma.product.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      page: page,
      lastPage: Math.ceil(count / limit),
      limit: limit,
      products: products.map<ProductOneResponse>((product) =>
        convertProductToResponse(product),
      ),
    };
  }

  async create(
    body: CreateProductBody,
    email: string,
    filePath?: string,
  ): Promise<ProductAllResponse> {
    console.log(body);

    const product = await this.prisma.product.create({
      data: {
        name: body.name,
        category: { connect: { id: body.categoryId } },
        color: body.color,
        imageUrl: filePath,
        owner: { connect: { email } },
      },
    });

    return {
      products: [convertProductToResponse(product)],
    };
  }

  async findOne(id: string, email: string): Promise<ProductOneResponse> {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { owner: { select: { email: true } } },
    });

    if (!product || email !== product.owner.email) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    return convertProductToResponse(product);
  }

  async updateOne(
    id: string,
    body: UpdateOneProductBody,
    email: string,
    filePath?: string,
  ) {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    if (
      (
        await this.prisma.product.findUnique({
          where: { id: id },
          include: { owner: true },
        })
      )?.owner.email !== email
    ) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    const product = await this.prisma.product.update({
      where: { id: id },
      data: {
        name: body.name,
        category: { connect: { id: body.categoryId } },
        color: body.color,
        imageUrl: filePath,
      },
    });

    return convertProductToResponse(product);
  }

  async deleteOne(id: string, email: string) {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    if (
      (
        await this.prisma.product.findUnique({
          where: { id: id },
          include: { owner: true },
        })
      )?.owner.email !== email
    ) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    const product = await this.prisma.product.delete({
      where: { id: id },
    });

    return convertProductToResponse(product);
  }
}
