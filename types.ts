export type CategoryResponse = {
  id: string;
  name: string;
  order: number;
  children?: { id: string; name: string; order: number }[];
};

export type ProductResponse = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl?: string;
};

export type ProductRequest = {
  query?: string;
  categoryId?: string;
  color?: string[];
  page?: number;
  limit?: number;
};
