import React from 'react';
import { InfoModal } from '@/components/modals/infoModal';
import { LayoutModalFull } from '@/components/modals/layout-modal-full/layoutModalFull';
import classes from './main.module.css';
import { ModalContext } from '@/context/modalContext';

export const Main: React.FC = () => {
  const { isModalOpen } = React.useContext(ModalContext);

  return (
    <main className={classes.main}>
      {isModalOpen && (
        <LayoutModalFull variant="info">
          <InfoModal />
        </LayoutModalFull>
      )}
    </main>
  );
};
