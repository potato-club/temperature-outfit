import type { File } from 'formidable';
import type { NextApiRequest } from 'next';

export type FilePath = string | null;

export type Response = {
  code?: number;
  message?: string;
};

export type UserLocationPostRequest = {
  locationId?: number;
};

export type LocationResponse = { id: number; name: string };

export type ProfileResponse = {
  name: string;
  email: string;
  imageUrl: string;
  location: { id: number; name: string };
};

export type CategoryResponse =
  | Response
  | {
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

export type ProductDetailResponse =
  | Response
  | {
      id: string;
      name: string;
      categoryId: string;
      color: string;
      imageUrl?: string;
      createdAt: string;
      updatedAt: string;
    };

export type ProductResponse =
  | Response
  | {
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
};

export type OutfitResponse =
  | Response
  | {
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

export type WeatherStatus = 'cloud' | 'rain' | 'snow' | 'sun';

export type WeatherResponse =
  | Response
  | {
      date: string;
      locationId: number;
      status: WeatherStatus;
      temperature: string;
      lowestTemperature: string;
      highestTemperature: string;
      isForecast: boolean;
      createdAt: string;
      updatedAt: string;
    };

export type SuggestionGetRequest = {
  temperature?: string;
};

export type SuggestionOutfit = {
  id: string;
  imageUrl: string | null;
  rating: number;
  temperature: string;
};

export type SuggestionResponse =
  | Response
  | {
      outfits: SuggestionOutfit[];
    };
