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

import {AuthContext} from '@/context/auth-context'

import { useToastStore } from '@/stores/toast-notificacion-store';
import { Toast } from '@/components/toasts-info/toast';



export const Main: React.FC = () => {
  const { isOpen, showToast } = useToastStore();
  const {session} = React.useContext(AuthContext)
  // console.log(session)


  const { isModalOpen, isSubModalOpen, modalType } =
    React.useContext(ModalContext);
  const currentVariant = 'info';



  React.useEffect(() => {
      showToast('Signed in', 'Session successfully started', 'success');
    }, [showToast]);

  return (
    <main className={classes.main}>
      {isOpen && session!== null && <Toast />}
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
