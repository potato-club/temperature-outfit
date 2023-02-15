import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UpdateLocationUserBody } from '@temperature-outfit/core';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async findProfile(@Req() req: Request) {
    return await this.userService.findProfile(req.user.email);
  }

  @Post('location')
  async updateLocation(
    @Req() req: Request,
    @Body() body: UpdateLocationUserBody,
  ) {
    return await this.userService.updateLocation(body, req.user.email);
  }
}
