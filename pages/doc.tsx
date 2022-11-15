import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false });

function Doc() {
  return <SwaggerUI url="swagger.json" />;
}

export default Doc;
