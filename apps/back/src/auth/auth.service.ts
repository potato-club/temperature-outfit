import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
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
    const u = await this.userService.findOne({ email: user.email });

    if (!user) {
      return await this.userService.create(account, user);
    }

    return u;
  }

  async login(user: any) {
    const payload = {
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async delete(email: string) {
    const user = await this.prisma.user.delete({
      where: { email: email },
    });

    if (user) {
      return { message: '계정 삭제 완료' };
    } else {
      throw new HttpException('계정을 찾을 수 없음', HttpStatus.NOT_FOUND);
    }
  }
}
