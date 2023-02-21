import api from './common';

export const todayCodyApi = {
  getManyOutfit: (startDay: string, endDay: string) =>
    api.authGet(`outfit?startDate=${startDay}&endDate=${endDay}`),

  addProduct: (data: FormData) => api.authPost(`outfit`, data),

  getOutfit: (id: string) => api.authGet(`outfit/${id}`),

  deleteOutfit: (id: string) => api.authDelete(`outfit/${id}`),

  putOutfit: (id: string, data: FormData) => api.authPut(`outfit/${id}`, data),
};
