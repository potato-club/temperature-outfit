import React from 'react';
import styled from '@emotion/styled';
import Calendar from './components/Calendar';

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
  height: 100vh;
`;
