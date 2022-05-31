import React from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';

export const CalendarPage = () => {
  return (
    <Wrapper>
      캘린더 페이지임
      <Calendar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
