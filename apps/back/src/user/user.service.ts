import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import {
  LocationResponse,
  UserLocationPostRequest,
} from '@temperature-outfit/core';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findLocation(email: string): Promise<LocationResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
      include: { location: { select: { id: true, name: true } } },
    });

    if (!user) {
      throw new HttpException('인증 오류', HttpStatus.FORBIDDEN);
    }

    return user.location;
  }

  async updateLocation(
    body: UserLocationPostRequest,
    email: string,
  ): Promise<LocationResponse> {
    if (!body.locationId) {
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    const user = await this.prisma.user.update({
      where: { email: email },
      include: { location: { select: { id: true, name: true } } },
      data: {
        location: { connect: { id: body.locationId } },
      },
    });

    if (!user) {
      throw new HttpException('인증 오류', HttpStatus.FORBIDDEN);
    }

    return user.location;
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prisma.user.findUnique({ where });
  }

  async create(
    account: {
      type: 'oauth';
      provider: 'google';
      providerAccountId: string;
      refreshToken?: string;
      accessToken?: string;
      expiresAt?: number;
      tokenType?: string;
      scope?: string;
      idToken?: string;
      sessionState?: string;
    },
    user: {
      name: string;
      email: string;
      imageUrl: string;
    },
  ): Promise<User> {
    const a = await this.prisma.account.create({
      include: {
        user: true,
      },
      data: {
        user: {
          connectOrCreate: {
            create: {
              name: user.name,
              email: user.email,
              image: user.imageUrl,
            },
            where: { email: user.email },
          },
        },
        type: account.type,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        refresh_token: account.refreshToken,
        access_token: account.accessToken,
        expires_at: account.expiresAt,
        token_type: account.tokenType,
        scope: account.scope,
        id_token: account.idToken,
        session_state: account.sessionState,
      },
    });

    return a.user;
  }
}
