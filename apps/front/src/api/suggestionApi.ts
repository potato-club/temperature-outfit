import api from './common';

export const suggestionApi = {
  suggestion: (temperature: string) =>
    api.authGet(`suggestion?temperature=${temperature}`),
};
