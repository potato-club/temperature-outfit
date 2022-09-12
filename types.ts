import type { WeatherStatus } from '@prisma/client';
import type { File } from 'formidable';
import type { NextApiRequest } from 'next';
import type { Session } from 'next-auth';

export type ApiRequest = NextApiRequest & {
  session?: Session;
  file?: File;
};

export type UserLocationPostRequest = {
  locationId?: number;
};

export type LocationResponse = { id: number; name: string };

export type CategoryResponse = {
  id: string;
  name: string;
  children?: { id: string; name: string }[];
};

export type ProductGetRequest = {
  query?: string;
  categoryId?: string;
  color?: string;
  page?: string;
  limit?: string;
};

export type ProductPostRequest = {
  name: string;
  categoryId: string;
  color: string;
};

export type ProductPutRequest = {
  name?: string;
  categoryId?: string;
  color?: string;
  resetImage?: boolean;
};

export type ProductDetailResponse = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductResponse = {
  page?: number;
  limit?: number;
  lastPage?: number;
  products: ProductDetailResponse[];
};

export type OutfitGetRequest = {
  startDate?: string;
  endDate?: string;
};

export type OutfitPostRequest = {
  date?: string;
  locationId?: number;
  productsId?: string;
  comment?: string;
  rating?: string;
};

export type OutfitPutRequest = {
  date?: string;
  productsId?: string;
  comment?: string;
  rating?: string;
  resetImage?: boolean;
};

export type OutfitResponse = {
  id: string;
  date: string;
  locationId: number;
  weather?: WeatherResponse;
  imageUrl?: string;
  products: ProductDetailResponse[];
  comment?: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type WeatherGetRequest = {
  date?: string;
  locationId?: string;
};

export type WeatherResponse = {
  date: string;
  locationId: number;
  status: WeatherStatus;
  temperature: number;
  lowestTemperature: number;
  highestTemperature: number;
  isForecast: boolean;
  createdAt: string;
  updatedAt: string;
};
