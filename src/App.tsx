import React from 'react';
import { LayoutApp } from '@/layouts/layout-app/layout-app';
import { Header } from '@/pods/header/header';
import { Main } from '@/scenes/main/main';
import { ModalProvider } from '@/context/modal-provider';
import { ChannelRealtimeProvider } from '@/context/channel-provider';
import {ModalCategoryProvider} from '@/context/modal-category-provider'

export function App(): React.FC {
  return (
    <ChannelRealtimeProvider>
      <ModalProvider>
      <ModalCategoryProvider>
        <LayoutApp>
          <Header />
          <Main />
        </LayoutApp>
      </ModalCategoryProvider>
      </ModalProvider>
    </ChannelRealtimeProvider>
  );
}
export default App;
