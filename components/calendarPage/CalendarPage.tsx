import React from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

export const CalendarPage = () => {
  return (
    <Wrapper>
      <Calendar />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
=======
  width: 100%;
  height: 100vh;
>>>>>>> 92ebd19f299704c7117741afd2f926da193a8e7f
`;
