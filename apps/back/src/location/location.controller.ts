import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/jwt.auth.guard';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.locationService.findAll();
  }
}
