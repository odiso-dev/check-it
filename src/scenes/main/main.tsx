import React from 'react';
import { InfoModal } from '@/pods/modals/info/info';
import { LayoutModalFull } from '@/layouts/layout-modal/layout-modal';
import classes from './main.module.css';
import { ModalContext } from '@/context/modal-context';
import { AddItemModal } from '@/pods/modals/add-item/add-item';
import { ButtonAddItem } from '@/components/buttons/btn-add-item/btn-add-item';

export const Main: React.FC = () => {
  const { isModalOpen, modalType } = React.useContext(ModalContext);

  const currentVariant = 'info';

  return (
    <main className={classes.main}>
      {isModalOpen && (
        <LayoutModalFull variant={currentVariant}>
          {modalType === 'info' ? <InfoModal /> : <AddItemModal />}
        </LayoutModalFull>
      )}
      {!isModalOpen && modalType !== 'addItems' ? <ButtonAddItem /> : null}
    </main>
  );
};
