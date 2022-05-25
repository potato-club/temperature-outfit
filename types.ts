// export type CategoryGetRequest = {};

export type CategoryResponse = {
  id: string;
  name: string;
  order: number;
  children?: { id: string; name: string; order: number }[];
};

export type ProductGetRequest = {
  query?: string;
  categoryId?: string;
  color?: string[];
  page?: number;
  limit?: number;
};

export type ProductPostRequest = {
  name: string;
  categoryId: string;
  color: string;
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
