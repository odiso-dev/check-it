import React from 'react';
import classes from './btn-add-item.module.css';
import { ModalContext } from '@/context/modal-context';

export const ButtonAddItem: React.FC = () => {
  const { isModalOpen, openModal } = React.useContext(ModalContext);

  return (
    <button
      className={classes.btnAdd}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isModalOpen}
      aria-controls="add_item_modal"
      onClick={!isModalOpen ? openModal : null}
    >
      Add item
    </button>
  );
};
