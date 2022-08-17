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
  const [myOutfit, setMyOutfit] = useState<EventInput[]>([]);
  const router = useRouter();

  const startDay = '2022-08-01';
  const endDay = '2022-08-31';
  const getMyOutfit = async () => {
    try {
      const { data } = await todayCodyApi.getManyOutfit(startDay, endDay);
      const realData: EventInput[] = data.map(
        (item: EventInput): EventInput => {
          return {
            id: item.id,
            start: item.date,
            rating: item.rating,
          };
        },
      );

      setMyOutfit(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyOutfit();
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
    if (myOutfit.map((item) => item.start).includes(selectInfo.startStr)) {
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
        events={myOutfit}
        eventClick={moveToOutfit}
        select={handleDateSelect}
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
        contentHeight={800}
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
