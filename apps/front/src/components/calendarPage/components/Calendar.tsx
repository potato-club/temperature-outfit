import React, { useEffect, useState } from 'react';
import FullCalendar, {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from '@emotion/styled';
import { EventInput } from '@fullcalendar/react';
import { todayCodyApi } from 'api';
import { useRouter } from 'next/router';
import { DateItem } from './DateItem';
import { today } from 'constants/index';
import { useQuery } from 'react-query';
import { errorModal } from 'utils/interactionModal';

const Calendar = () => {
  const [myOutfit, setMyOutfit] = useState<EventInput[]>([]);
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const router = useRouter();
  useQuery(
    ['getMtOutfits', startDay, endDay],
    () => todayCodyApi.getManyOutfit(startDay, endDay),
    {
      onSuccess: ({ data }) => {
        const realData: EventInput[] = data.map(
          (item: EventInput): EventInput => {
            return {
              id: item.id,
              start: item.date,
              rating: item.rating,
              weatherStatus: item.weather.status,
              temperature: item.weather.temperature,
            };
          },
        );
        setMyOutfit(realData);
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <DateItem
        weatherStatus={eventContent.event.extendedProps.weatherStatus}
        temperature={eventContent.event.extendedProps.temperature}
        rating={eventContent.event.extendedProps.rating}
      />
    );
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const selectedItem = selectInfo.startStr;
    const selectDate = new Date(selectedItem);
    selectDate.setHours(selectDate.getHours() - 9);
    if (myOutfit.map((item) => item.start).includes(selectedItem)) {
      return null;
    } else if (selectDate > today) {
      return null;
    } else {
      router.push({
        pathname: `/edit`,
        query: {
          day: selectedItem,
        },
      });
    }
  };

  const moveToOutfit = (clickInfo: EventClickArg) => {
    router.push({
      pathname: `/outfitView/${clickInfo.event.id}`,
    });
  };

  const dateSet = (arg: any) => {
    setStartDay(arg.startStr.replace(/T.*$/, ''));
    setEndDay(arg.endStr.replace(/T.*$/, ''));
  };

  return (
    <Wrapper>
      <FullCalendar
        events={myOutfit}
        datesSet={dateSet}
        eventClick={moveToOutfit}
        select={handleDateSelect}
        plugins={[dayGridPlugin, interactionPlugin]}
        titleFormat={{ year: 'numeric', month: 'narrow' }}
        locale="ko"
        eventColor="transparent"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today',
        }}
        initialView="dayGridMonth"
        defaultAllDay={true}
        editable={false}
        selectable={true}
        dayMaxEvents={true}
        weekends={true}
        eventStartEditable={false}
        contentHeight={800}
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 1178px;
  max-width: 1178px;
  padding: 20px;
  background-color: white;
  margin-top: 58px;
  margin-bottom: 12px;
`;

export default Calendar;
