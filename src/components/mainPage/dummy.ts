export interface Suggestions {
  id: string;
  imageUrl: string;
  rating: number;
  temperature: number;
}

export const dummy: Suggestions[] = [
  {
    id: '1',
    imageUrl: 'dummy/cody1.webp',
    rating: 80,
    temperature: 1.5,
  },
  {
    id: '2',
    imageUrl: 'dummy/cody2.webp',
    rating: 100,
    temperature: 1.5,
  },
  {
    id: '3',
    imageUrl: 'dummy/cody3.webp',
    rating: 100,
    temperature: 1.5,
  },
  {
    id: '4',
    imageUrl: 'dummy/cody4.webp',
    rating: 100,
    temperature: 1.5,
  },
  {
    id: '5',
    imageUrl: 'dummy/cody5.webp',
    rating: 90,
    temperature: 1.5,
  },
];