import { Controller, Post, UseGuards, Delete, Req } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './jwt.auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return await this.authService.login(req.user);
  }

  @Delete('delete')
  async delete(@Req() req: Request) {
    return await this.authService.delete(req.user.email);
  }
}
