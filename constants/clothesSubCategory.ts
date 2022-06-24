import { CategoryDetail } from 'constants/types';

interface Clothes {
  [key: string]: CategoryDetail[];
}

export const clothesSubCategory: Clothes = {
  top: [
    { name: '반팔', value: 'halfT' },
    { name: '긴팔', value: 'longT' },
    { name: '맨투맨', value: 'menToMen' },
    { name: '후드티', value: 'hoodT' },
    { name: '후드짚업', value: 'hoodZipUp' },
    { name: '가디건', value: 'cardigan' },
    { name: '조끼', value: 'vest' },
    { name: '스웨터', value: 'sweater' },
    { name: '자켓', value: 'jacket' },
    { name: '패딩', value: 'padding' },
    { name: '코트', value: 'coat' },
    { name: '기타', value: 'etc' },
  ],
  bottom: [
    { name: '반바지', value: 'shorts' },
    { name: '청바지', value: 'jeans' },
    { name: '트레이닝', value: 'training' },
    { name: '레깅스', value: 'leggings' },
    { name: '기타', value: 'etc' },
  ],
  shoes: [
    { name: '샌들', value: 'sandals' },
    { name: '슬리퍼', value: 'slippers' },
    { name: '운동화', value: 'sneakers' },
    { name: '부츠', value: 'boots' },
    { name: '기타', value: 'etc' },
  ],
  others: [{ name: '기타', value: 'etc' }],
};
