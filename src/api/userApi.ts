import api from './common';

export const userApi = {
  getAllLocations: () => {
    return api.get('location');
  },
  getUserLocation: () => {
    return api.get('user/location');
  },
  changeUserLocation: (data: any) => {
    return api.post('user/location', data);
  },
  deleteAuth: () => {
    return api.delete('auth/delete');
  },
};
