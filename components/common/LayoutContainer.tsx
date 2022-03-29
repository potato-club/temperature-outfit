import React from "react";
import styled from "@emotion/styled";

export const LayoutContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
`;
