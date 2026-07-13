import React from 'react';
import { ModalContext } from '@/context/modal-context';
import classes from './button-add-item.module.css';
import { supabase } from '@/services/supabase-client';
import { AuthContext } from '@/context/auth-context';
import { ModalCategoryContext } from '@/context/modal-category-context';

interface Props {
  value: string;
  onClear: () => void;
  isDisabled: boolean;
  infoTableType: string;
}

export const ButtonAddItem: React.FC<Props> = (props) => {
  const {
    value,
    onClear,
    isDisabled,
    infoTableType,
    /* valueInputCategory,
    valueInputProduct, */
  } = props;
  const { isModalOpen } = React.useContext(ModalContext);
  const { session } = React.useContext(AuthContext);
  const { categoryModalId } = React.useContext(ModalCategoryContext);

  
  const handleOnClick = async () => {
    try {
      // Base fields common to both tables
      const payload = {
        name: value,
        created_by: session.user.id,
      };

      // If it is a product, we add the category code
      if (infoTableType === 'products') {
        // Make sure you have this ID to hand
        if (!categoryModalId) {
          console.error('The category_id is missing for insertion into products');
          return;
        }
        // Add category.id in payload object
        payload.category_id = categoryModalId;
      }

      // Single request
      const { data, error } = await supabase
        .from(infoTableType)
        .insert([payload])
        .select();

      if (error) throw error;

      console.log('Insert success in:', infoTableType, data);
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