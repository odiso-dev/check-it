import React from 'react';
import classes from './layout-modal.module.css';
import { CloseButton } from '@/components/buttons/button-close/button-close';
import {ModalContext} from '@/context/modal-context'

// type of modal children rendering
type ModalVariant = 'info' | 'addItems';

interface Props {
  children: React.ReactNode;
  variant?: ModalVariant;
}
export const LayoutModalFull: React.FC<Props> = (props) => {
  const { children, variant } = props;
  const {modalType} = React.useContext(ModalContext)

  return (
    <dialog
      role="dialog"
      className={`${classes.layoutModal} ${variant ? classes[variant] : ''} `}
      data-modal-type={modalType}
      >
      <CloseButton />
      {children}
    </dialog>
  );
};
