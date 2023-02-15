import type { Outfit, Product, Weather } from '@prisma/client';
import {
  OutfitResponse,
  ProductOneResponse,
  WeatherResponse,
} from '@temperature-outfit/core';

export const convertProductToResponse = (
  product: Product,
): ProductOneResponse => ({
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
  products: outfit.products.map<ProductOneResponse>((product) =>
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
  temperature: weather.temperature.toFixed(1),
  lowestTemperature: weather.lowestTemperature.toFixed(1),
  highestTemperature: weather.highestTemperature.toFixed(1),
  isForecast: weather.isForecast,
  createdAt: weather.createdAt.toISOString(),
  updatedAt: weather.updatedAt.toISOString(),
});
