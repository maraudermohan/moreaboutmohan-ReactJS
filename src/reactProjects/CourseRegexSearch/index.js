import React, { lazy } from 'react';

import Main from './components/Main';

const Header = lazy(() => import('components/Header'));

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
