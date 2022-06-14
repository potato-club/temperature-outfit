import api from './common';

export const boardApi = {

  getForeRecentInfo: async () => {
    return api.get('/', {});
  }
};
