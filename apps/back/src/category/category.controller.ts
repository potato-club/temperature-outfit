import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/jwt.auth.guard';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }
}
