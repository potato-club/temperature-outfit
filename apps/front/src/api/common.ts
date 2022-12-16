import axios from 'axios';
import { setting } from 'constants/setting';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url: string) => axios.get(setting.baseUrl + url),

  getWithParams: (url: string, params: any) =>
    axios.get(setting.baseUrl + url, params),

  post: (url: string, params: any) => axios.post(setting.baseUrl + url, params),

  delete: (url: string) => axios.delete(setting.baseUrl + url),

  put: (url: string, params: any) => axios.put(setting.baseUrl + url, params),
};
