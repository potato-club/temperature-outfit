import axios from 'axios';
import { setting } from 'constants/setting';
import { tokenHelper } from 'utils/tokenHelper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url: string) => axios.get(setting.baseUrl + url),
  authGet: (url: string) =>
    axios.get(setting.baseUrl + url, {
      headers: {
        Authorization: `Bearer ${tokenHelper.getTokenId()}`,
      },
    }),
  getWithParams: (url: string, params: any) =>
    axios.get(setting.baseUrl + url, {
      params,
      headers: {
        Authorization: `Bearer ${tokenHelper.getTokenId()}`,
      },
    }),

  post: (url: string, params: any) => axios.post(setting.baseUrl + url, params),
  authPost: (url: string, params: any) =>
    axios.post(setting.baseUrl + url, params, {
      headers: {
        Authorization: `Bearer ${tokenHelper.getTokenId()}`,
      },
    }),

  delete: (url: string) => axios.delete(setting.baseUrl + url),
  authDelete: (url: string) =>
    axios.delete(setting.baseUrl + url, {
      headers: {
        Authorization: `Bearer ${tokenHelper.getTokenId()}`,
      },
    }),

  put: (url: string, params: any) => axios.put(setting.baseUrl + url, params),
  authPut: (url: string, params: any) =>
    axios.put(setting.baseUrl + url, params, {
      headers: {
        Authorization: `Bearer ${tokenHelper.getTokenId()}`,
      },
    }),
};
