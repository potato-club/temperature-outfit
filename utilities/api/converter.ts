import type { Outfit, Product, Weather } from '@prisma/client';
import { OutfitResponse, ProductResponse, WeatherResponse } from '../../types';

export const convertProductToResponse = (
  product: Product,
): ProductResponse => ({
  id: product.id,
  name: product.name,
  categoryId: product.categoryId,
  color: product.color,
  imageUrl: product.imageUrl ?? undefined,
  createdAt: product.createdAt.toISOString(),
  updatedAt: product.updatedAt.toISOString(),
});

export const convertOutfitToResponse = (
  outfit: Outfit & {
    products: Product[];
    weather: Weather | null;
  },
): OutfitResponse => ({
  id: outfit.id,
  date: outfit.date.toISOString().split('T')[0],
  locationId: outfit.locationId,
  weather: outfit.weather ? convertWeatherResponse(outfit.weather) : undefined,
  imageUrl: outfit.imageUrl ?? undefined,
  products: outfit.products.map<ProductResponse>((product) =>
    convertProductToResponse(product),
  ),
  comment: outfit.comment ?? undefined,
  rating: outfit.rating,
  createdAt: outfit.createdAt.toISOString(),
  updatedAt: outfit.updatedAt.toISOString(),
});

export const convertWeatherResponse = (weather: Weather): WeatherResponse => ({
  date: weather.date.toISOString().split('T')[0],
  locationId: weather.locationId,
  status: weather.status,
  temperature: weather.temperature,
  lowestTemperature: weather.lowestTemperature,
  highestTemperature: weather.highestTemperature,
  isForecast: weather.isForecast,
  createdAt: weather.createdAt.toISOString(),
  updatedAt: weather.updatedAt.toISOString(),
});
