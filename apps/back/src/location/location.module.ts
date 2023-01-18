import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LocationController],
  providers: [LocationService, PrismaService],
})
export class LocationModule {}
