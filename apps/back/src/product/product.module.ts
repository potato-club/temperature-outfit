import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { filesParser } from '../utilities/middlewares/fileParser';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(filesParser).forRoutes(ProductController);
  }
}
