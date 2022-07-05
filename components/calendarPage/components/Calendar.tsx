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

  // 등록된 거 클릭했을 때
  // 해당 등록한 코디로 이동할거임
  // date 정보 필요함
  handleEventClick = (clickInfo: EventClickArg) => {
    // view에 많은 data가 있음
    console.log(clickInfo.view);
    console.log(clickInfo);

    // 여기에 id가 담김
    console.log(clickInfo.event.id);

    //clickInfo에 클릭한 날짜에 대한 정보들이 있음
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
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
          eventClick={this.handleEventClick} // 등록된 이벤트를 클릭할 때
          // 둘중 하나만 사용해도 됨 : 드래그해서 여러개를 사용하는 것이 아니기 때문
          select={this.handleDateSelect} // 날짜 클릭 이벤트
          // 날짜 클릭 이벤트
          dateClick={function (info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Click: ' + info.date);
            alert(
              'Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY,
            );
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            // info.dayEl.style.backgroundColor = 'red';
          }}
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
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </Wrapper>
    );
  }
}

// 날짜별 정보 달력에 삽입
function renderEventContent(eventContent: EventContentArg) {
  return (
    <Date>
      <b>평점 : 10</b>
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
  height: 100vh;
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
