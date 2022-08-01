import axios from 'axios';
import { setting } from 'constants/setting';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string) => await axios.get(setting.baseUrl + url),

  getAll: async (url: string) =>
    await axios.get(setting.baseUrl + url),

  getWithParams: async (url: string, params: any) =>
    await axios.get(setting.baseUrl + url, params),

  post: async (url: string, params: any) =>
    await axios.post(setting.baseUrl + url, params),
};
