import React from 'react';
import { InfoModal } from '@/pods/modals/info/modal-info';
import { LayoutModalFull } from '@/layouts/layout-modal/layout-modal';
import classes from './main.module.css';
import { ModalContext } from '@/context/modal-context';
import { AddItemModal } from '@/pods/modals/add-item/modal-add-item';
import { ButtonOpenModalItems } from '@/components/buttons/button-modal-items/button-modal-items';
import { ModalCategory } from '@/pods/modals/category/modal-category';
import { Category } from '@/components/category/category';

export const Main: React.FC = () => {
  const { isModalOpen, modalType } = React.useContext(ModalContext);
  console.warn(modalType);

  const currentVariant = 'info';

  return (
    <main className={classes.main}>
      <Category/>
      {isModalOpen && (
        <LayoutModalFull variant={currentVariant}>
          {modalType === 'info' ? <InfoModal /> : <AddItemModal />}
        </LayoutModalFull>
      )}
      {!isModalOpen ? <ButtonOpenModalItems /> : null}
      {modalType === 'category' ? <ModalCategory /> : null}
    </main>
  );
};
