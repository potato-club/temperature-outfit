import api from './common';

export const suggestionApi = {
  suggestion: async (temperature: string) =>
    api.get(`suggestion?temperature=${temperature}`),
};
