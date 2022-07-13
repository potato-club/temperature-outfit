import api from './common';

export const productApi = {
  // 옷등록
  // 잠시 any로 둠
  addProduct: async (data: any) => api.post(`product`, data),

  // 옷 조회
  getProduct: async (id: string) => api.get(`product/${id}`),
};
