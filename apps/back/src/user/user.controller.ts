import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('location')
  async findLocation(@Req() req: Request) {
    return await this.userService.findLocation(req.user.email);
  }

  @Post('location')
  async updateLocation(@Req() req: Request) {
    return await this.userService.updateLocation(req.body, req.user.email);
  }
}
