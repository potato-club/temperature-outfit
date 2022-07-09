export type categoryType = 'top' | 'bottom' | 'outer' | 'shoes' | 'mainETC';
type clothesDataType = {
  name: string;
  url: string;
  category: categoryType;
};
export const clothesData: clothesDataType[] = [
  {
    name: 'LMC 고래반팔',
    url: '/clothes/dummy1.jpg',
    category: 'top',
  },
  {
    name: '반팔반팔',
    url: '/clothes/dummy2.jpg',
    category: 'top',
  },
  {
    name: '반팔이다',
    url: '/clothes/dummy3.jpg',
    category: 'top',
  },
  {
    name: '새벽코딩',
    url: '/clothes/dummy4.jpg',
    category: 'top',
  },
  {
    name: '꿀잼꿀잼',
    url: '/clothes/dummy5.jpg',
    category: 'top',
  },
  {
    name: '아이신나',
    url: '/clothes/dummy6.jpg',
    category: 'top',
  },
  {
    name: '하하하하',
    url: '/clothes/dummy7.jpg',
    category: 'top',
  },
  {
    name: '좋다좋아',
    url: '/clothes/dummy8.jpg',
    category: 'top',
  },
  {
    name: '후드티',
    url: '/clothes/dummy9.jpg',
    category: 'outer',
  },
  {
    name: '모자',
    url: '/clothes/dummy10.jpg',
    category: 'mainETC',
  },
  {
    name: '블레이저',
    url: '/clothes/dummy11.jpg',
    category: 'outer',
  },
  {
    name: '신발',
    url: '/clothes/dummy12.jpg',
    category: 'shoes',
  },
  {
    name: '우산',
    url: '/clothes/dummy13.jpg',
    category: 'mainETC',
  },
  {
    name: '바지',
    url: '/clothes/dummy14.jpg',
    category: 'bottom',
  },
];
