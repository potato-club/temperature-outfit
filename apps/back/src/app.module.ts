import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { OutfitModule } from './outfit/outfit.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { CategoryModule } from './category/category.module';
import { WeatherModule } from './weather/weather.module';
import { SuggestionModule } from './suggestion/suggestion.module';

@Module({
  imports: [
    AuthModule,
    OutfitModule,
    ProductModule,
    UserModule,
    LocationModule,
    CategoryModule,
    WeatherModule,
    SuggestionModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
