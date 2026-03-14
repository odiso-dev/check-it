import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-modal-items.module.css';

export const ButtonOpenModalItems: React.FC = () => {
  const { isModalOpen, openModal, setModalType } =
    React.useContext(ModalContext);

  const handleClick = () => {
    if (!isModalOpen) {
      setModalType('');
      setModalType('addItems');
      openModal();
    }
  };

  return (
    <div className={classes.wrapperButtonAddItem}>
      <button
        className={classes.btnAdd}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
        aria-controls="add_item_modal"
        onClick={handleClick}
      >
        Add item
      </button>
    </div>
  );
};
