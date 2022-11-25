import { infoModal } from '../utils/interactionModal';
import api from './common';

export const productApi = {
  // 옷등록
  // 잠시 any로 둠
  addProduct: async (data: any) => api.post(`product`, data),

  // 옷 하나만 조회
  getProduct: async (id: string) => api.get(`product/${id}`),

  // 옷 필터해서 조회
  // { params : { 필터 : 값 } }
  getFilter: async (data: any) => api.getWithParams(`product`, data),

  // 옷 삭제
  deleteProduct: async (id: string) => api.delete(`product/${id}`),
};
