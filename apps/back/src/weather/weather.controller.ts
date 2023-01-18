import { Controller, Get, Req } from '@nestjs/common';
import { Public } from '../auth/jwt.auth.guard';
import { WeatherService } from './weather.service';
import { Request } from 'express';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Public()
  @Get()
  async findOne(@Req() req: Request) {
    return await this.weatherService.findOne(req.query);
  }
}
