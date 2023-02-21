import { FindAllProductQuery } from '@temperature-outfit/core';
import api from './common';

export const productApi = {
  // 옷등록
  addProduct: async (data: FormData) => api.authPost(`product`, data),

  // 옷 하나만 조회
  getProduct: async (id: string) => api.authGet(`product/${id}`),

  // 옷 필터해서 조회
  getFilter: async (data: FindAllProductQuery) =>
    api.getWithParams(`product`, data),

  // 옷 삭제
  deleteProduct: async (id: string) => api.authDelete(`product/${id}`),
};
