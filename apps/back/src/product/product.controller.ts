import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import {
  CreateProductBody,
  FindAllProductQuery,
  UpdateOneProductBody,
} from '@temperature-outfit/core';
import { Request } from 'express';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Req() req: Request, @Query() query: FindAllProductQuery) {
    return await this.productService.findAll(query, req.user.email);
  }

  @Post()
  async create(@Req() req: Request, @Body() body: CreateProductBody) {
    return await this.productService.create(body, req.user.email, req.filePath);
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param('id') id: string) {
    return await this.productService.findOne(id, req.user.email);
  }

  @Put(':id')
  async updateOne(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() body: UpdateOneProductBody,
  ) {
    return await this.productService.updateOne(
      id,
      body,
      req.user.email,
      req.filePath,
    );
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param('id') id: string) {
    return await this.productService.deleteOne(id, req.user.email);
  }
}
