import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Req() req: Request) {
    return await this.productService.findAll(req.query, req.user.email);
  }

  @Post()
  async create(@Req() req: Request) {
    return await this.productService.create(req.body, req.user.email);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    return await this.productService.findOne(id, req.user.email);
  }

  @Put(':id')
  async updateOne(@Req() req: Request, @Param('id') id: string) {
    return await this.productService.updateOne(id, req.body, req.user.email);
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param('id') id: string) {
    return await this.productService.deleteOne(id, req.user.email);
  }
}
