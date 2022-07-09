import type { Outfit, Product } from '@prisma/client';
import { OutfitResponse, ProductResponse } from '../../types';

export const convertProductToResponse = (
  product: Product,
): ProductResponse => ({
  id: product.id,
  name: product.name,
  categoryId: product.categoryId,
  color: product.color,
  imageUrl: product.imageUrl ?? undefined,
  createdAt: product.createdAt.toISOString(),
  updatedAt: product.updatedAt.toISOString(),
});

export const convertOutfitToResponse = (
  outfit: Outfit & {
    products: Product[];
  },
): OutfitResponse => ({
  id: outfit.id,
  imageUrl: outfit.imageUrl ?? undefined,
  products: outfit.products.map<ProductResponse>((product) =>
    convertProductToResponse(product),
  ),
  createdAt: outfit.createdAt.toISOString(),
  updatedAt: outfit.updatedAt.toISOString(),
});
