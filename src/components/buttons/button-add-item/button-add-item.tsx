import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-add-item.module.css';

export const ButtonAddItem: React.FC = () => {
  const { isModalOpen, openModal, setModalType } =
    React.useContext(ModalContext);

  const handleClick = () => {
    if (!isModalOpen) {
      setModalType('addItems');
      openModal();
    }
  };

  return (
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
  );
};
