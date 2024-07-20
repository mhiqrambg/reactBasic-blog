import { useRouteError as useRouteErrorHook } from 'react-router-dom';

const PageError = () => {
  useRouteErrorHook();
  return (
    <div>
      <h1>UPS, ADA ERROR</h1>
    </div>
  );
};

export default PageError;
