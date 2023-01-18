import { Injectable } from '@nestjs/common';
import { CategoryResponse } from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CategoryResponse[]> {
    const categories = await this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        children: {
          select: { id: true, name: true },
          orderBy: { order: 'asc' },
        },
      },
      where: {
        parentId: null,
      },
      orderBy: { order: 'asc' },
    });

    return categories;
  }
}
