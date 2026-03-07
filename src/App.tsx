import React from 'react';
import { LayoutApp } from '@/components/layout/layoutApp';
import { Header } from '@/components/header/header';
import { Main } from '@/components/main';
import { ModalProvider } from '@/context/modalProvider';

export function App(): React.FC {
  return (
    <ModalProvider>
      <LayoutApp>
        <Header />
        <Main />
      </LayoutApp>
    </ModalProvider>
  );
}
export default App;
