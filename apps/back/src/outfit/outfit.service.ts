import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  FindAllOutfitQuery,
  CreateOutfitBody,
  UpdateOneOutfitBody,
  OutfitResponse,
} from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';
import { convertOutfitToResponse } from '../utilities/converter';

@Injectable()
export class OutfitService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    query: FindAllOutfitQuery,
    email: string,
  ): Promise<OutfitResponse[]> {
    const outfits = await this.prisma.outfit.findMany({
      where: {
        owner: { email: email },
        date: {
          gte: query.startDate ? new Date(query.startDate) : undefined,
          lte: query.endDate ? new Date(query.endDate) : undefined,
        },
      },
      include: {
        products: true,
        weather: true,
      },
    });

    return outfits.map<OutfitResponse>((outfit) =>
      convertOutfitToResponse(outfit),
    );
  }

  async create(body: CreateOutfitBody, email: string, filePath?: string) {
    if (!body.date || !body.locationId) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    const outfit = await this.prisma.outfit.create({
      data: {
        owner: { connect: { email: email } },
        weather: {
          connect: {
            date_locationId: {
              date: new Date(body.date),
              locationId: +body.locationId,
            },
          },
        },
        imageUrl: filePath,
        products: {
          connect: body.productsId?.split(',').map((id) => ({ id })),
        },
        comment: body.comment,
        rating: body.rating,
      },
      include: { products: true, weather: true },
    });

    return [convertOutfitToResponse(outfit)];
  }

  async findOne(id: string, email: string) {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    const outfit = await this.prisma.outfit.findUnique({
      where: { id },
      include: {
        products: true,
        weather: true,
        owner: { select: { email: true } },
      },
    });

    if (!outfit || email !== outfit.owner.email) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    return convertOutfitToResponse(outfit);
  }

  async updateOne(
    id: string,
    body: UpdateOneOutfitBody,
    email: string,
    filePath?: string,
  ) {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    if (
      (
        await this.prisma.outfit.findUnique({
          where: { id: id },
          include: { owner: true },
        })
      )?.owner.email !== email
    ) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    const outfit = await this.prisma.outfit.update({
      where: { id: id },
      data: {
        date: body.date ? new Date(body.date) : undefined,
        imageUrl: filePath,
        products: body.productsId
          ? {
              set: [],
              connect: body.productsId.split(',').map((id) => ({ id })),
            }
          : undefined,
        comment: body.comment,
        rating: body.rating ? +body.rating : undefined,
      },
      include: { products: true, weather: true },
    });

    return convertOutfitToResponse(outfit);
  }

  async deleteOne(id: string, email: string) {
    if (Array.isArray(id)) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    if (
      (
        await this.prisma.outfit.findUnique({
          where: { id: id },
          include: { owner: true },
        })
      )?.owner.email !== email
    ) {
      throw new HttpException('데이터 없음', HttpStatus.NOT_FOUND);
    }

    const outfit = await this.prisma.outfit.delete({
      where: { id: id },
      include: { products: true, weather: true },
    });

    return convertOutfitToResponse(outfit);
  }
}
