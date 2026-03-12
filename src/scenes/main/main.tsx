import React from 'react';
import { InfoModal } from '@/pods/modals/info-modal';
import { LayoutModalFull } from '@/layouts/layout-modal/layout-modal';
import classes from './main.module.css';
import { ModalContext } from '@/context/modal-context';

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
