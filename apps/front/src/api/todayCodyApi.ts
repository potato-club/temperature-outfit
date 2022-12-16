import api from './common';

export const todayCodyApi = {
  getManyOutfit:  (startDay: string, endDay: string) =>
    api.get(`outfit?startDate=${startDay}&endDate=${endDay}`),

  addProduct:  (data: any) => api.post(`outfit`, data),

  getOutfit:  (id: string) => api.get(`outfit/${id}`),

  deleteOutfit:  (id: string) => api.delete(`outfit/${id}`),

  putOutfit:  (id: string, data: any) => api.put(`outfit/${id}`, data),
};
