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

interface CalendarState {
  weekendsVisible: boolean;
  currentEvents: EventApi[];
}

export default class Calendar extends React.Component<{}, CalendarState> {
  state: CalendarState = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <Wrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ko"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'today',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={this.state.weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={this.handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </Wrapper>
    );
  }

  // 해당 날짜를 선택하여 코디 등록할 때
  // 코디 등록page로 이동하기
  // date정보 가지고 이동
  handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        // end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  // 등록된 거 클릭했을 때
  // 해당 등록한 코디로 이동할거임
  // date 정보 필요함
  handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  };

  // 뭔지 아직 모르겠음
  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events,
    });
  };
}

// 날짜별 정보 달력 안에 띄우기
// 회의할 내용
function renderEventContent(eventContent: EventContentArg) {
  return (
    <Date>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </Date>
  );
}

const Wrapper = styled.section`
  width: 1178px;
  padding: 20px;
  height: 100%;
  background-color: white;
  margin-top: 40px;
`;

const Date = styled.article`
  background-color: wheat;
  padding: 10px 0;
`;
