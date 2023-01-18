import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Location, Weather, WeatherStatus } from '@prisma/client';
import { WeatherGetRequest, WeatherResponse } from '@temperature-outfit/core';
import axios from 'axios';
import { PrismaService } from '../prisma.service';
import { convertWeatherResponse } from '../utilities/converter';

type RawWeather = {
  status: WeatherStatus;
  temperature: number;
  lowestTemperature: number;
  highestTemperature: number;
  humidity: number;
  isForecast: boolean;
};

@Injectable()
export class WeatherService {
  constructor(private prisma: PrismaService) {}

  async findOne(query: WeatherGetRequest): Promise<WeatherResponse> {
    if (!query.date || !query.locationId) {
      // 필수 쿼리
      throw new HttpException('요청 오류', HttpStatus.BAD_REQUEST);
    }

    const date = new Date(query.date);
    const location = await this.prisma.location.findUnique({
      where: { id: +query.locationId },
    });

    const today = new Date();

    if (
      date.getFullYear > today.getFullYear ||
      date.getMonth > today.getMonth ||
      date.getDate > today.getDate
    ) {
      // 미래 날짜 오류
      throw new HttpException('요청 오류 (미래 시간)', HttpStatus.BAD_REQUEST);
    }

    if (!location) {
      // 지역 없음
      throw new HttpException('요청 오류 (지역 없음)', HttpStatus.BAD_REQUEST);
    }

    let result = await this.updateWeather(date, today, location);

    return convertWeatherResponse(result);
  }

  async updateWeather(date: Date, today: Date, location: Location) {
    const weather = await this.prisma.weather.findFirst({
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
        result = await this.prisma.weather.update({
          where: {
            date_locationId: {
              date: weather.date,
              locationId: weather.locationId,
            },
          },
          data: await this.getWeather(date, today, location),
        });
      }
    } else {
      result = await this.prisma.weather.create({
        data: {
          date,
          locationId: location.id,
          ...(await this.getWeather(date, today, location)),
        },
      });
    }

    return result;
  }

  async getWeather(date: Date, today: Date, location: Location) {
    // 미래일 경우는 컨크롤러에서 처리
    if (
      today.toISOString().split('T')[0] === date.toISOString().split('T')[0]
    ) {
      return await this.getCurrentWeather(
        location.latitude,
        location.longitude,
      );
    } else {
      return await this.getPastWeather(date, location.code);
    }
  }

  async getCurrentWeather(
    latitude: number,
    longitude: number,
  ): Promise<RawWeather> {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=metric`,
    );

    return {
      status: this.getWeatherStatus(
        (res.data?.clouds?.all ?? 0) / 10,
        typeof res.data?.rain !== 'undefined' ? res.data?.rain['1h'] ?? 0 : 0,
      ),
      temperature: res.data.main.temp,
      lowestTemperature: res.data.main.temp_min,
      highestTemperature: res.data.main.temp_max,
      humidity: res.data.main.humidity,
      isForecast: true,
    };
  }

  getPastWeather = async (date: Date, code: number): Promise<RawWeather> => {
    const dateString = date
      .toLocaleDateString('ko', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replaceAll('.', '')
      .replaceAll(' ', '');

    try {
      const res = await axios.get(
        `http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?dataCd=ASOS&dateCd=DAY&dataType=JSON&serviceKey=${process.env.DAILY_KEY}&startDt=${dateString}&endDt=${dateString}&stnIds=${code}`,
      );

      const item = res.data.response.body.items.item[0];

      return {
        status: this.getWeatherStatus(item.avgTca, item.sumRn),
        temperature: +item.avgTa,
        lowestTemperature: +item.minTa,
        highestTemperature: +item.maxTa,
        humidity: +(+item.avgRhm).toFixed(),
        isForecast: false,
      };
    } catch (error) {
      return {
        status: 'sun',
        temperature: 0,
        lowestTemperature: 0,
        highestTemperature: 0,
        humidity: 0,
        isForecast: true,
      };
    }
  };

  // 눈 추가해야 함
  getWeatherStatus(cloudiness: number, precipitation: number): WeatherStatus {
    if (precipitation) {
      return 'rain';
    } else if (cloudiness > 8.5) {
      return 'cloud';
    } else {
      return 'sun';
    }
  }
}
