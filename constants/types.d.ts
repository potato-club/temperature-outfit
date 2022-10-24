declare module 'types' {
  export type WeatherStatusType = 'sun' | 'cloud' | 'rain' | 'snow';

  export interface CategoryDetail {
    name: string;
    id: string;
  }

  export interface Suggestions {
    id: string;
    imageUrl: string;
    rating: number;
    temperature: number;
  }
}
