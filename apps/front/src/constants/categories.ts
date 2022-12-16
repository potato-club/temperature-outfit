import { topState, outerState, bottomState, shoesState, etcState } from "recoil/atom";

export const categories = [
  {
    label: '상의',
    id: 'top',
    recoil: topState,
  },
  {
    label: '아우터',
    id: 'outer',
    recoil: outerState,
  },
  {
    label: '하의',
    id: 'bottom',
    recoil: bottomState,
  },
  {
    label: '신발',
    id: 'shoes',
    recoil: shoesState,
  },
  {
    label: '기타',
    id: 'mainETC',
    recoil: etcState,
  },
];
