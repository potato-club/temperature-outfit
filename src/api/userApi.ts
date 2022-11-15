import api from './common';

export const userApi = {
  getAllLocations: async () => {
    return api.get('location');
  },
  getUserLocation: async () => {
    return api.get('user/location');
  },
  changeUserLocation: async (data: any) => {
    return api.post('user/location', data);
  },
};
