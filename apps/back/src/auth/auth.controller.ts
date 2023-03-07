import {
  Controller,
  UseGuards,
  Delete,
  Req,
  Get,
  Redirect,
} from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './jwt.auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  async login(@Req() req: Request) {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  @Redirect()
  async callback(@Req() req: Request) {
    return {
      url: `${process.env.FRONT_URL}/?token=${
        (await this.authService.login(req.user)).access_token
      }`,
    };
  }

  @Delete('delete')
  async delete(@Req() req: Request) {
    return await this.authService.delete(req.user.email);
  }
}
