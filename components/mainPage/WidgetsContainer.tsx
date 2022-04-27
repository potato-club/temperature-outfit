import styled from '@emotion/styled';
import { Children } from 'react';

export const WidgetsContainer: React.FC = ({ children }) => {
  return <Widgets>{children}</Widgets>;
};

const Widgets = styled.div`
  position: relative;
  padding: 32px;
  display: flex;
`;