// 위치, 온도, 날씨(기후), TodayBest (상위1위, 하위1위), 추천 수 1위
export type mainDummyType = {
  location: string;
  average: number;
  max: number;
  min: number;
  weather: string;
  TodayBest: {
    top: string;
    bottom: string;
    rankTop: string;
  };
};
export const mainDummy:mainDummyType = {
  location: '인천',
  average: 10,
  max: 15,
  min: 5,
  weather: 'sunny',
  TodayBest : {
    top : "스웨터",
    bottom: "청바지",
    rankTop: "스웨터",
  }
};