import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-add-item.module.css';
import { supabase } from '@/services/supabase-client';

interface Props {
  value: string;
  onClear: () => void;
  isDisabled: boolean;
}

export const ButtonAddItem: React.FC<Props> = (props) => {
  const { value, onClear, isDisabled } = props;
  const { isModalOpen } = React.useContext(ModalContext);

  const handleOnClick = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([
          { name: value, created_by: '73499691-1801-4012-8c6f-4535831260ff' },
        ])
        // .select();      

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
    >
      Add item
    </button>
  );
};
