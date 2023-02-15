import { Controller, Get, Query, Req } from '@nestjs/common';
import { FindSuggestionQuery } from '@temperature-outfit/core';
import { Request } from 'express';
import { SuggestionService } from './suggestion.service';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Get()
  async find(@Req() req: Request, @Query() query: FindSuggestionQuery) {
    return await this.suggestionService.find(query, req.user.email);
  }
}
