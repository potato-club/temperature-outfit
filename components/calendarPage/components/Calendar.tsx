import React from 'react';
import FullCalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

interface CalendarState {
  currentEvents: EventApi[];
}

export default class Calendar extends React.Component<{}, CalendarState> {
  state: CalendarState = {
    currentEvents: [],
  };

  // 해당 날짜를 선택하여 코디 등록할 때
  // 코디 등록page로 이동하기
  // date정보 가지고 이동
  handleDateSelect = (selectInfo: DateSelectArg) => {
    // 만약 이벤트가 있다면 아무것도 하지않기
    //  return null;
    // 이벤트 추가 페이지로
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
      });
    }
  };

  moveToCody = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event.id);
    console.log(clickInfo.event.start); // Sat Jul 23 2022 00:00:00 GMT+0900 (한국 표준시)
    console.log(clickInfo.event.title);
  };

  //  DB에서 이벤트를 처음 가져올 때
  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events,
    });
  };

  render() {
    return (
      <Wrapper>
        <FullCalendar
          eventClick={this.moveToCody} // 등록된 이벤트를 클릭할 때
          select={this.handleDateSelect} // 날짜 클릭 이벤트
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ko"
          eventColor="transparent"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'today',
          }}
          initialView="dayGridMonth"
          defaultAllDay={true} // 명시 해주지 않으면 FullCalendar가 추측을 하는데 최선을 다한다고 하니까 걍 명시해줌
          editable={true}
          selectable={true}
          dayMaxEvents={true}
          weekends={true}
          eventStartEditable={false}
          initialEvents={INITIAL_EVENTS}
          contentHeight={800} // 날짜 컨텐츠 박스 크기 지정
          eventContent={renderEventContent}
          eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        />
      </Wrapper>
    );
  }
}

// 날짜별 정보 달력에 삽입
function renderEventContent(eventContent: EventContentArg) {
  console.log(eventContent.event.title); // title 등록할때 있어야할 값임

  console.log(eventContent.event.id);

  // 아니면 그냥 스티커처럼 뭐가 있다라고 표시만해줄까?
  return (
    <Date>
      <b>평점 : {eventContent.event.title}</b>
      <br />
      <i>평균 온도 : 23.5°C</i>
      <br />
      <i>기후 : 해 모양</i>
    </Date>
  );
}

const Wrapper = styled.section`
  width: 1178px;
  padding: 20px;
  background-color: white;
  margin-top: 58px;
  margin-bottom: 12px;
`;

const Date = styled.article`
  background-color: ${customColor.brandColor3};
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
`;
