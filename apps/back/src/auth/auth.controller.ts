import { Controller, UseGuards, Delete, Req, Get } from '@nestjs/common';
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
  async callback(@Req() req: Request) {
    return await this.authService.login(req.user);
  }

  @Delete('delete')
  async delete(@Req() req: Request) {
    return await this.authService.delete(req.user.email);
  }
}
