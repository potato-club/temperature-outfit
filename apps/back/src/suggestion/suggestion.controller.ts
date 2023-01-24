import { Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { SuggestionService } from './suggestion.service';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  async find(@Req() req: Request) {
    return await this.suggestionService.find(req.query, req.user.email);
  }
}