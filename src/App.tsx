import React from 'react';
import { LayoutApp } from '@/layouts/layout-app/layout-app';
import { Header } from '@/pods/header/header';
import { Main } from '@/scenes/main/main';
import { ModalProvider } from '@/context/modal-provider';
import { ChannelRealtimeProvider } from '@/context/channel-provider';

export function App(): React.FC {
  return (
    <ChannelRealtimeProvider>
      <ModalProvider>
        <LayoutApp>
          <Header />
          <Main />
        </LayoutApp>
      </ModalProvider>
    </ChannelRealtimeProvider>
  );
}
export default App;
