import { CategoryDetail } from 'types/categoryDetail.type';
interface Clothes {
  [key: string]: CategoryDetail[];
}

export const clothesSubCategory: Clothes = {
  all: [{ name: '전체', id: 'all' }],
  top: [
    { name: '전체', id: 'top' },
    { name: '민소매', id: 'sleeveless' },
    { name: '반팔', id: 'halfT' },
    { name: '긴팔', id: 'longT' },
    { name: '맨투맨', id: 'menToMen' },
    { name: '후드티', id: 'hoodT' },
    { name: '스웨터', id: 'sweater' },
    { name: '셔츠', id: 'shirt' },
    { name: '조끼', id: 'vest' },
    { name: '기타', id: 'topETC' },
  ],
  outer: [
    { name: '전체', id: 'outer' },
    { name: '후드집업', id: 'hoodZipUp' },
    { name: '가디건', id: 'cardigan' },
    { name: '후리스', id: 'fleece' },
    { name: '자켓', id: 'jacket' },
    { name: '코트', id: 'coat' },
    { name: '패딩', id: 'padding' },
    { name: '기타', id: 'outerETC' },
  ],
  bottom: [
    { name: '전체', id: 'bottom' },
    { name: '반바지', id: 'shorts' },
    { name: '청바지', id: 'jeans' },
    { name: '트레이닝', id: 'training' },
    { name: '레깅스', id: 'leggings' },
    { name: '기타', id: 'bottomETC' },
  ],
  shoes: [
    { name: '전체', id: 'shoes' },
    { name: '샌들', id: 'sandals' },
    { name: '슬리퍼', id: 'slippers' },
    { name: '운동화', id: 'sneakers' },
    { name: '부츠', id: 'boots' },
    { name: '기타', id: 'shoesETC' },
  ],
  mainETC: [
    { name: '전체', id: 'mainETC' },
    { name: '기타', id: 'subETC' },
  ],
};
