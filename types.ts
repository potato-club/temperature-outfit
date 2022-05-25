export type CategoryResponse = {
  id: string;
  name: string;
  order: number;
  children?: { id: string; name: string; order: number }[];
};

