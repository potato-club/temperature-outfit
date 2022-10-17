import { topState, outerState, bottomState, shoesState, etcState } from "recoil/atom";

export const categories = [
  {
    title: '상의',
    recoil: topState,
  },
  {
    title: '아우터',
    recoil: outerState,
  },
  {
    title: '하의',
    recoil: bottomState,
  },
  {
    title: '신발',
    recoil: shoesState,
  },
  {
    title: '기타',
    recoil: etcState,
  },
];
