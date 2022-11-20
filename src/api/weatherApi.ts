import api from './common';

export const weatherApi = {
  getWeather: (date: string, locationId: number) => {
    return api.get(`weather?date=${date}&locationId=${locationId}`);
  },
};
