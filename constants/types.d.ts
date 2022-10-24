declare module 'types' {
  export interface WeatherStatus {
    weatherStatus: 'sun' | 'cloud' | 'rain' | 'snow';
  }
  export interface CategoryDetail {
    name: string;
    id: string;
  }
}
