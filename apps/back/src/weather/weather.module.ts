import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [WeatherService, PrismaService],
  controllers: [WeatherController],
})
export class WeatherModule {}
