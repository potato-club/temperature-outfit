import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export type FilePath = string | null;

export class UpdateLocationUserBody {
  @IsNotEmpty()
  @IsInt()
  locationId: number;
}

export type LocationResponse = { id: number; name: string };

export type ProfileResponse = {
  name: string;
  email: string;
  imageUrl: string;
  location: { id: number; name: string };
};

export type CategoryResponse = {
  id: string;
  name: string;
  children?: { id: string; name: string }[];
};

export class FindAllProductQuery {
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  limit: number = 10;
}

export class CreateProductBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}

export class UpdateOneProductBody {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  color?: string;
}

export type ProductOneResponse = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductAllResponse = {
  page?: number;
  limit?: number;
  lastPage?: number;
  products: ProductOneResponse[];
};

export class FindAllOutfitQuery {
  @IsOptional()
  @MaxLength(10)
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @MaxLength(10)
  @IsDateString()
  endDate?: string;
}

export class CreateOutfitBody {
  @IsNotEmpty()
  @MaxLength(10)
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsInt()
  locationId?: number;

  @IsNotEmpty()
  @IsString()
  productsId?: string;

  @IsOptional()
  comment?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  rating: number = 0;
}

export class UpdateOneOutfitBody {
  @IsOptional()
  @MaxLength(10)
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  productsId?: string;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  rating?: number;
}

export type OutfitResponse = {
  id: string;
  date: string;
  locationId: number;
  weather?: WeatherResponse;
  imageUrl?: string;
  products: ProductOneResponse[];
  comment?: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export class FindOneWeatherQuery {
  @IsNotEmpty()
  @MaxLength(10)
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  locationId: number;
}

export type WeatherStatus = 'cloud' | 'rain' | 'snow' | 'sun';

export type WeatherResponse = {
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

export class FindSuggestionQuery {
  @IsNotEmpty()
  @IsNumber()
  temperature: number;
}

export type SuggestionOutfit = {
  id: string;
  imageUrl: string | null;
  rating: number;
  temperature: string;
};

export type SuggestionResponse = {
  outfits: SuggestionOutfit[];
};
