import { Module } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionController } from './suggestion.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [SuggestionService, PrismaService],
  controllers: [SuggestionController],
})
export class SuggestionModule {}
