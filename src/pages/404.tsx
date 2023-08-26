import React from 'react';

const AsyncNoPage = React.lazy(() => import('../modules/404/index'));

const HomePage: React.FC = () => {
  return <AsyncNoPage />;
};

export default HomePage;