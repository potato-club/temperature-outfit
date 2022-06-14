import axios from 'axios';
import { setting } from 'constants/setting';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params: any) =>
    await axios.get(setting.apiUrl + url, params),

  // getAuth: async (url: string, params: any) => {
  //   return await axios({
  //     method: 'get',
  //     url: setting.apiUrl + url,
  //     params,
  //     headers: {
  //       Authorization: `Bearer `,
  //     },
  //   });
  // },

  post: async (url: string, params: any) =>
    await axios.post(setting.apiUrl + url, params),
};
