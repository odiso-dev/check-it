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
  // console.warn('[categoryModalId]', categoryModalId);

  // console.log('[SESSION]', session)
  // console.warn('[infoTableType]', infoTableType);
  // console.warn('[value]', value);
  // console.log('[valueInputCategory]', valueInputCategory);
  // console.log('[valueInputProduct]', valueInputProduct);

  /* const handleOnClick = async () => {
    try {
      const { data, error } = await supabase
        .from(infoTableType)
        .insert({ name: value, created_by: session.user.id })
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
  }; */
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
          console.error('Falta el category_id para insertar en productos');
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

/* 
const handleOnClick = async () => {    
  try {
    // 1. Campos base que tienen ambas tablas
    const payload: any = { 
      name: value, 
      created_by: session.user.id 
    };

    // 2. Condición específica: Si es producto, añadimos la FK de la categoría
    if (infoTableType === 'products') {
      // Importante: asegúrate de tener este ID disponible (vía props o contexto)
      if (!categoryId) {
        console.error("Falta el category_id para insertar en productos");
        return;
      }
      payload.category_id = categoryId;
    }

    // 3. Petición única
    const { data, error } = await supabase
      .from(infoTableType)
      .insert([payload])
      .select();

    if (error) throw error;

    console.log('Insert exitoso en:', infoTableType, data);
    onClear();
  } catch (error) {
    console.error('Error al insertar:', error.message);
  }
};

*/
