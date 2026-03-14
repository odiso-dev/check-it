import React from 'react';
import classes from './btn-add-item.module.css';
import { ModalContext } from '@/context/modal-context';

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
