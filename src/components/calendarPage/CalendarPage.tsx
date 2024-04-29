import React from 'react';
import styled from '@emotion/styled';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import dynamic from 'next/dynamic';

export const CalendarPage = () => {
  const Calendars: any = dynamic(() => import('./components/Calendar'), {
    ssr: false,
  });

  return (
    <Wrapper>
      <Calendars />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
