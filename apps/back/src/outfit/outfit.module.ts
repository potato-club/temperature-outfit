import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { filesParser } from '../utilities/middlewares/fileParser';
import { OutfitController } from './outfit.controller';
import { OutfitService } from './outfit.service';

@Module({
  controllers: [OutfitController],
  providers: [OutfitService, PrismaService],
})
export class OutfitModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(filesParser).forRoutes(OutfitController);
  }
}
