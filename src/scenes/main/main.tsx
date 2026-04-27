import React from 'react';
import { InfoModal } from '@/pods/modals/info/modal-info';
import { LayoutModalFull } from '@/layouts/layout-modal/layout-modal';
import classes from './main.module.css';
import { ModalContext } from '@/context/modal-context';
import { AddItemModal } from '@/pods/modals/add-item/modal-add-item';
import { ButtonOpenModalItems } from '@/components/buttons/button-modal-items/button-modal-items';
import { ModalCategory } from '@/pods/modals/category/modal-category';
import { Category } from '@/components/category/category';
import { AuthForm } from '@/components/form/login';
import { InfoButton } from '@/components/buttons/button-info-modal/button-info-modal';


export const Main: React.FC = () => {
  const { isModalOpen, isSubModalOpen, modalType } =
    React.useContext(ModalContext);
  const currentVariant = 'info';

  return (
    <main className={classes.main}>
      <InfoButton />
      <Category />
      {isModalOpen && (
        <LayoutModalFull variant={currentVariant}>
          {modalType === 'info' ? <InfoModal /> : null}
          {modalType === 'addItems' ? <AddItemModal /> : null}
          {modalType === 'login' ? <AuthForm /> : null}
        </LayoutModalFull>
      )}
      {!isModalOpen ? <ButtonOpenModalItems /> : null}
      {isSubModalOpen ? <ModalCategory /> : null}
    </main>
  );
};
