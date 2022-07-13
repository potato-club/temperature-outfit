import api from './common';

export const todayCodyApi = {
  // 잠시 any로 둠
  // 내 옷차림 조회
  // 달력에서 보여주기 위한 여러개의 data를 가져옴
  // 옷 조회
  // {
  //   "startDate": "2022-07-13T05:51:20.903Z",
  //   "endDate": "2022-07-13T05:51:20.903Z",
  //   "page": 1,
  //   "limit": 10
  // }
  getManyOutfit: async (data: any) => api.getWithBody(`outfit`, data),

  // 그날의 옷차림 등록
  // 이미지 파일, id, 코맨트, 평점 함께 등록
  addProduct: async (data: any) => api.post(`outfit`, data),

  // 해당하는 날의 옷차림 조회
  //
  getOutfit: async (id: string, data: any) =>
    api.getWithBody(`outfit/${id}`, data),
};
