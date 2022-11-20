import api from './common';

export const suggestionApi = {
  suggestion:  (temperature: string) =>
    api.get(`suggestion?temperature=${temperature}`),
};
