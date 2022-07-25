import api from './common';

export const productApi = {
  // 옷등록
  // 잠시 any로 둠
  addProduct: async (data: any) => api.post(`product`, data),

  // 옷 하나만 조회
  // 필요없어서 지울 예정
  getProduct: async (id: string) => api.get(`product/${id}`),

  // 옷 전체 조회
  getAllProduct: async () => api.getAll(`product`),

  // 옷 필터해서 조회
  // { params : { 필터 : 값 } }
  getFilter: async (data: any) => api.getWithParams(`product`, data),
};


export const getFilter = async (type: any, filter: any, setClothesData: any) => {
  await productApi
    .getFilter({
      params: {
        [type]: filter,
      },
    })
    .then((res) => {
      console.log(res.data);
      setClothesData(res.data);
    })
    .catch((err) => console.log(err));
};