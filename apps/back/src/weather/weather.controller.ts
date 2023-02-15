import { Controller, Get, Query, Req } from '@nestjs/common';
import { Public } from '../auth/jwt.auth.guard';
import { WeatherService } from './weather.service';
import { FindOneWeatherQuery } from '@temperature-outfit/core';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Public()
  @Get()
  async findOne(@Query() query: FindOneWeatherQuery) {
    return await this.weatherService.findOne(query);
  }
}
