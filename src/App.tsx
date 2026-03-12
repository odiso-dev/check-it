import React from 'react';
import { LayoutApp } from '@/layouts/layout-app/layout-app';
import { Header } from '@/pods/header/header';
import { Main } from '@/scenes/main/main';
import { ModalProvider } from '@/context/modal-provider';

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
