import { File } from 'formidable';
import type { NextApiRequest } from 'next';
import { Session } from 'next-auth';

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
};

export type ProductResponse = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type OutfitGetRequest = {
  startDate?: string;
  endDate?: string;
  minRating?: number;
  maxRating?: number;
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
};

export type OutfitResponse = {
  id: string;
  date: string;
  locationId: number;
  weather?: WeatherResponse;
  imageUrl?: string;
  products: ProductResponse[];
  comment?: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type WeatherGetRequest = {
  date?: string;
  locationId?: string;
};

export type WeatherResponse = {};
