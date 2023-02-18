import {
  CreateOutfitBody,
  UpdateOneOutfitBody,
} from './../../../../libs/core/src/types';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Query,
  Body,
} from '@nestjs/common';
import { OutfitService } from './outfit.service';
import { Request } from 'express';
import { FindAllOutfitQuery } from '@temperature-outfit/core';

@Controller('outfit')
export class OutfitController {
  constructor(private readonly outfitService: OutfitService) {}

  @Get()
  async findAll(@Req() req: Request, @Query() query: FindAllOutfitQuery) {
    return await this.outfitService.findAll(query, req.user.email);
  }

  @Post()
  async create(@Req() req: Request, @Body() body: CreateOutfitBody) {
    return await this.outfitService.create(body, req.user.email, req.filePath);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    return await this.outfitService.findOne(id, req.user.email);
  }

  @Put(':id')
  async updateOne(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() body: UpdateOneOutfitBody,
  ) {
    return await this.outfitService.updateOne(
      id,
      body,
      req.user.email,
      req.filePath,
    );
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param('id') id: string) {
    return await this.outfitService.deleteOne(id, req.user.email);
  }
}
