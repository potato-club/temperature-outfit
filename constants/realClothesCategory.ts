interface Clothes {
  [key: string]: MainCategoryType;
}
interface MainCategoryType {
  name: string;
  value: string;
  subCategory: string[];
}

export const realClothesCategory: Clothes = {
  top: {
    name: '상의',
    value: 'top',
    subCategory: ['스웨터', '맨투맨', '후드티', '티셔츠', '기타'],
  },
  bottom: {
    name: '하의',
    value: 'bottom',
    subCategory: ['슬랙스', '청바지', '반바지', '츄리닝', '기타'],
  },
  shoes: {
    name: '신발',
    value: 'shoes',
    subCategory: ['슬리퍼', '운동화', '구두', '기타'],
  },
  others: {
    name: '기타',
    value: 'others',
    subCategory: ['기타'],
  },
};
