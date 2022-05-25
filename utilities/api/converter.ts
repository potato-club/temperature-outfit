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

