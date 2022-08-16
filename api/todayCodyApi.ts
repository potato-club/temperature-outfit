import api from './common';

export const todayCodyApi = {
  getManyOutfit: async (data: any) => api.getWithParams(`outfit`, data),

  addProduct: async (data: any) => api.post(`outfit`, data),

  getOutfit: async (id: string) => api.get(`outfit/${id}`),
};
