import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  FindSuggestionQuery,
  SuggestionOutfit,
  SuggestionResponse,
} from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SuggestionService {
  constructor(private prisma: PrismaService) {}

  async find(
    query: FindSuggestionQuery,
    email: string,
  ): Promise<SuggestionResponse> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new HttpException('요청 오류', HttpStatus.UNAUTHORIZED);
    }

    const result: SuggestionOutfit[] = await this.prisma.$queryRawUnsafe(
      `SELECT a.id, a."imageUrl", a.rating, b.temperature FROM "Outfit" as a JOIN "Weather" as b ON (a.date = b.date AND a."locationId" = b."locationId") WHERE a."ownerId" = '${user.id}' AND date(a.date) < date(now()) ORDER BY abs(${query.temperature} - b.temperature) LIMIT 5`,
    );

    result.sort((a, b) => b.rating - a.rating);

    return { outfits: result };
  }
}
