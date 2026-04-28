import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-add-item.module.css';
import { supabase } from '@/services/supabase-client';
import { AuthContext } from '@/context/auth-context';

interface Props {
  value: string;
  onClear: () => void;
  isDisabled: boolean;
  infoTableType: string;
}

export const ButtonAddItem: React.FC<Props> = (props) => {
  const { value, onClear, isDisabled, infoTableType } = props;
  const { isModalOpen } = React.useContext(ModalContext);
  const { session } = React.useContext(AuthContext);

  const handleOnClick = async () => {
    console.warn('CLICK', infoTableType);
    try {
      const { data, error } = await supabase
        .from(infoTableType)
        .insert([{ name: value, created_by: session.user.id }])
        .select();

      // TODO => Show toast notification (Toast, Alert, etc.)
      if (error) throw error;

      // Successfully insert
      console.log('Insert successfully:', data);
      // Clear input value
      onClear();
    } catch (error) {
      console.error('Error to insert:', error.message);
    }
  };

  return (
    <button
      className={classes.btnAdd}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={isModalOpen}
      aria-controls="add_item_modal"
      onClick={handleOnClick}
      disabled={isDisabled}
      data-type={infoTableType}
    >
      Add item
    </button>
  );
};
