import React from 'react';
import { InfoModal } from '@/components/modals/infoModal';
import { LayoutModalFull } from '@/components/modals/layout-modal-full/layoutModalFull';
import classes from './main.module.css';

export const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <LayoutModalFull variant="info">
        <InfoModal />
      </LayoutModalFull>
    </main>
  );
};
