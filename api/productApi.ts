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

// 편의상 우선 이렇게 사용

export type filterType = {
  categoryId?: string;
  color?: string;
};

export const frontApi = {
  getAllProduct: async (setClothesData: any) => {
    await productApi
      .getAllProduct()
      .then((res) => {
        console.log(res.data);
        setClothesData(res.data);
      })
      .catch((err) => console.log(err));
  },

  getFilter: async (filter: filterType, setClothesData: any) => {
    await productApi
      .getFilter({
        params: filter,
      })
      .then((res) => {
        console.log(res.data);
        setClothesData(res.data);
      })
      .catch((err) => console.log(err));
  },

  getClothesEdit: async (
    type: any,
    filter: any,
    clothesData: any,
    setClothesData: any,
  ) => {
    await productApi
      .getFilter({
        params: {
          [type]: filter,
        },
      })
      .then((res) => {
        if (
          clothesData.findIndex(
            (clothes: any) => clothes.id === res.data[0].id,
          ) !== -1
        ) {
          alert('이미 등록된 옷입니다.');
          return;
        }
        setClothesData(clothesData.concat(res.data));
        alert('등록 성공!');
      })
      .catch((err) => console.log(err));
  },
};
