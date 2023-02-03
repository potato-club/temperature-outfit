import { setting } from 'constants/index';
import { tokenHelper } from 'utils/tokenHelper';
import api from './common';

export const userApi = {
  login: () => {
    location.href = `${setting.baseUrl}auth/google/login`;
  },
  logout: () => {
    tokenHelper.removeId();
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
