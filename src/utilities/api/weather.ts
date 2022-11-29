import { Location, Weather, WeatherStatus } from '@prisma/client';
import axios from 'axios';
import { prisma } from 'db';

type RawWeather = {
  status: WeatherStatus;
  temperature: number;
  lowestTemperature: number;
  highestTemperature: number;
  humidity: number;
  isForecast: boolean;
};

export const updateWeather = async (
  date: Date,
  today: Date,
  location: Location,
) => {
  const weather = await prisma.weather.findFirst({
    where: { date, locationId: location.id },
  });

  let result: Weather;

  if (weather) {
    if (
      !weather.isForecast ||
      today.getTime() - weather.updatedAt.getTime() <= 1000 * 60 * 10
    ) {
      result = weather;
    } else {
      result = await prisma.weather.update({
        where: {
          date_locationId: {
            date: weather.date,
            locationId: weather.locationId,
          },
        },
        data: await getWeather(date, today, location),
      });
    }
  } else {
    result = await prisma.weather.create({
      data: {
        date,
        locationId: location.id,
        ...(await getWeather(date, today, location)),
      },
    });
  }

  return result;
};

export const getWeather = async (
  date: Date,
  today: Date,
  location: Location,
) => {
  // 미래일 경우는 컨크롤러에서 처리
  if (today.toISOString().split('T')[0] === date.toISOString().split('T')[0]) {
    return await getCurrentWeather(location.latitude, location.longitude);
  } else {
    return await getPastWeather(date, location.code);
  }
};

export const getCurrentWeather = async (
  latitude: number,
  longitude: number,
): Promise<RawWeather> => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=metric`,
  );

  return {
    status: getWeatherStatus(
      (res.data?.clouds?.all ?? 0) / 10,
      typeof res.data?.rain !== 'undefined' ? res.data?.rain['1h'] ?? 0 : 0,
    ),
    temperature: res.data.main.temp,
    lowestTemperature: res.data.main.temp_min,
    highestTemperature: res.data.main.temp_max,
    humidity: res.data.main.humidity,
    isForecast: true,
  };
};

export const getPastWeather = async (
  date: Date,
  code: number,
): Promise<RawWeather> => {
  const dateString = date.toISOString().split('T')[0].replaceAll('-', '');

  const res = await axios.get(
    `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?dataCd=ASOS&dateCd=DAY&dataType=JSON&serviceKey=${process.env.DAILY_KEY}&startDt=${dateString}&endDt=${dateString}&stnIds=${code}`,
  );

  if (res.data.response.body.items == undefined) {
    return {
      status: 'sun',
      temperature: 0,
      lowestTemperature: 0,
      highestTemperature: 0,
      humidity: 0,
      isForecast: true,
    };
  }

  const item = res.data.response.body.items.item[0];

  return {
    status: getWeatherStatus(item.avgTca, item.sumRn),
    temperature: +item.avgTa,
    lowestTemperature: +item.minTa,
    highestTemperature: +item.maxTa,
    humidity: +(+item.avgRhm).toFixed(),
    isForecast: false,
  };
};

// 눈 추가해야 함
const getWeatherStatus = (
  cloudiness: number,
  precipitation: number,
): WeatherStatus => {
  if (precipitation) {
    return 'rain';
  } else if (cloudiness > 8.5) {
    return 'cloud';
  } else {
    return 'sun';
  }
};
