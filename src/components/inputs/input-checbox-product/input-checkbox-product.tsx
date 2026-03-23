import React from 'react';
import classes from './input-checkbox-product.module.css';
import { supabase } from '@/services/supabase-client';

interface Props {
  name: string;
  checked: boolean;
  dataSupaId: number;
}

export const InputCheckbox: React.FC<Props> = (props) => {
  const { name, checked, dataSupaId } = props;
  const [currentStatus, setCurrentStatus] = React.useState(checked);

  const toggleChecked = async (id: number) => {
    const newState = !currentStatus;

    const { error } = await supabase
      .from('products')
      .update({ checked: newState })
      .eq('id', id);

    if (!error) {
      setCurrentStatus(newState);
    } else {
      console.error('Error loading data:', error);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        name=""
        className={classes.productCheckbox}
        id={name}
        checked={currentStatus}
        onChange={() => toggleChecked(dataSupaId)}
      />

      <label htmlFor={name} className={classes.labelProduct}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="14"
            stroke="var(--primary_dark)"
            strokeWidth="4"
          />
          <circle
            className={classes.checked}
            cx="24"
            cy="24"
            r="8"
            fill="none"
          />
        </svg>
        <span>{name}</span>
      </label>
    </>
  );
};
