import { Injectable } from '@nestjs/common';
import { ProfileResponse } from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProfileResponse[]> {
    const locations = await this.prisma.location.findMany({
      select: { id: true, name: true },
    });

    return locations;
  }
}
