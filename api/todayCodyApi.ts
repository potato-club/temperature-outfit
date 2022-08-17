import api from './common';

export const todayCodyApi = {
  getManyOutfit: async (startDay: string, endDay: string) =>
    api.get(`outfit?startDate=${startDay}&endDate=${endDay}`),

  addProduct: async (data: any) => api.post(`outfit`, data),

  getOutfit: async (id: string) => api.get(`outfit/${id}`),
};
