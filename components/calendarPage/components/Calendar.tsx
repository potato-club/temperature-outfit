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

export const Calendar = () => {
  const [myCody, setMyCody] = useState<EventInput[]>([]);
  const router = useRouter();

  const getMyCody = async () => {
    try {
      const { data } = await todayCodyApi.getManyOutfit({
        startDate: '2022-08-01',
        endDate: '2022-08-26',
        minRating: 0,
        maxRating: 10,
      });
      const realData: EventInput[] = data.map(
        (item: EventInput): EventInput => {
          return {
            id: item.id,
            start: item.date,
            title: item.comment, // 이거 변경 할 예정
            rating: item.rating,
          };
        },
      );

      setMyCody(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyCody();
  }, []);

  function renderEventContent(eventContent: EventContentArg) {
    console.log(eventContent.event.extendedProps.rating);

    return (
      <DateItem
        weather={'cloud'}
        temperature={'23'}
        rating={eventContent.event.extendedProps.rating}
      />
    );
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    if (myCody.map((item) => item.start).includes(selectInfo.startStr)) {
      return null;
    }
    router.push({
      pathname: `/edit`,
      query: {
        day: selectInfo.startStr,
      },
    });
  };

  const moveToOutfit = (clickInfo: EventClickArg) => {
    router.push({
      pathname: `/outfitView/${clickInfo.event.id}`,
    });
  };

  return (
    <Wrapper>
      <FullCalendar
        events={myCody}
        eventClick={moveToOutfit} // 등록된 이벤트를 클릭할 때
        select={handleDateSelect} // 날짜 클릭 이벤트
        plugins={[dayGridPlugin, interactionPlugin]}
        locale="ko"
        eventColor="transparent"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today',
        }}
        initialView="dayGridMonth"
        defaultAllDay={true}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        weekends={true}
        eventStartEditable={false}
        contentHeight={800} // 날짜 컨텐츠 박스 크기 지정
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1178px;
  padding: 20px;
  background-color: white;
  margin-top: 58px;
  margin-bottom: 12px;
`;
