// 날씨(기후)는 추후 추가예정
export type editDummyType = {
  average: number;
  max: number;
  min: number;
  day: Date;
}
export const editDummy: editDummyType = {
  average: 10,
  max: 15,
  min: 5,
  day: new Date(),
};
