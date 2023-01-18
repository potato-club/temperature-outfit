import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { OutfitService } from './outfit.service';
import { Request } from 'express';

@Controller('outfit')
export class OutfitController {
  constructor(private readonly outfitService: OutfitService) {}

  @Get()
  async findAll(@Req() req: Request) {
    return await this.outfitService.findAll(req.query, req.user.email);
  }

  @Post()
  async create(@Req() req: Request) {
    return await this.outfitService.create(req.body, req.user.email);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    return await this.outfitService.findOne(id, req.user.email);
  }

  @Put(':id')
  async updateOne(@Req() req: Request, @Param('id') id: string) {
    return await this.outfitService.updateOne(id, req.body, req.user.email);
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param('id') id: string) {
    return await this.outfitService.deleteOne(id, req.user.email);
  }
}
