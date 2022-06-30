interface Clothes {
  name: string;
  value: string;
  top?: string[];
  bottom?: string[];
  shoes?: string[];
  others?: string[];
}

export const clothesCategory: Clothes[] = [
  { name: '상의', value: 'top', top: ['스웨터', '맨투맨', '후드티', '티셔츠'] },
  {
    name: '하의 ',
    value: 'bottom',
    bottom: ['슬랙스', '청바지', '반바지', '츄리닝'],
  },
  { name: '신발', value: 'shoes', shoes: ['슬리퍼', '운동화', '구두'] },
  {
    name: '기타',
    value: 'others',
    others: [''],
  },
];
