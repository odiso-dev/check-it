import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-add-item.module.css';

export const ButtonAddItem: React.FC = () => {
  const { isModalOpen } = React.useContext(ModalContext);

  return (
    <button
      className={classes.btnAdd}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isModalOpen}
      aria-controls="add_item_modal"
    >
      Add item
    </button>
  );
};
