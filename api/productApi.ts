import api from './common';

export const productApi = {
  // 옷등록
  // 잠시 any로 둠
  addProduct: async (data: any) => api.post(`product`, data),

  // 옷 하나만 조회
  // 필요없어서 지울 예정
  getProduct: async (id: string) => api.get(`product/${id}`),

  // 옷 전체 조회
  getAllProduct: async (data: any) => api.getWithBody(`product`, data),
};
