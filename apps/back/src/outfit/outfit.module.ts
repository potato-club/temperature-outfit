import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OutfitController } from './outfit.controller';
import { OutfitService } from './outfit.service';

@Module({
  controllers: [OutfitController],
  providers: [OutfitService, PrismaService],
})
export class OutfitModule {}
