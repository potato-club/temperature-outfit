import api from './common';

export const userApi = {
  login: async () => {
    return api.get('/users/login/success', {});
  },
  logout: async () => {
    return api.get('/users/logout', {});
  },
};
