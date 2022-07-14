import axios from 'axios';
import { setting } from 'constants/setting';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string) => await axios.get(setting.baseUrl + url),

  getWithBody: async (url: string, params: any) =>
    await axios.get(setting.baseUrl + url, params),

  post: async (url: string, params: any) =>
    await axios.post(setting.baseUrl + url, params),
};
