import { tokenHelper } from 'utils/tokenHelper';
import api from './common';

export const userApi = {
  login: () => {
    return api.get('auth/google/login');
  },
  logout: () => {
    tokenHelper.setTokenId('');
  },
  getUserProfile: () => {
    return api.authGet('user/profile');
  },
  getAllLocations: () => {
    return api.get('location');
  },
  changeUserLocation: (data: any) => {
    return api.authPost('user/location', data);
  },
  deleteAuth: () => {
    return api.authDelete('auth/delete');
  },
};
