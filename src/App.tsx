import React from 'react';
import { LayoutApp } from '@/components/layout/layoutApp';
import { Header } from '@/components/header/header';
import { Main } from '@/components/main';

export function App(): React.FC {
  return (
    <LayoutApp>
      <Header />
      <Main />
    </LayoutApp>
  );
}
export default App;
