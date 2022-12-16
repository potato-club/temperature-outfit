import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import styled from '@emotion/styled';

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false });

function Doc() {
  return (
    <Container>
      <SwaggerUI url="swagger.json" />
    </Container>
  );
}

export default Doc;

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;
