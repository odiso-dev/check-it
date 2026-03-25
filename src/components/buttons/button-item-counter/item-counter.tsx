import React from 'react';
import classes from './item-counter.module.css';
import {supabase} from '@/services/supabase-client'

export const ItemCounter: React.FC = (props) => {
  const { quantity, dataSupaId } = props;
  const [currentQuantity, setCurrentQuantity] = React.useState<number>(quantity);
  
  // Ref to save debounce timer
  const debounceTimer:React.RefObject = React.useRef<NodeJS.Timeout | null>(null);

   React.useEffect(() => {
    setCurrentQuantity(quantity);
  }, [quantity])


  // Fn to update DB
  const updateSupabase = (newVal: number) => {
    // Clear the previous timer if the user clicks quickly again
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // Delay 500ms to update DB
    debounceTimer.current = setTimeout(async () => {
      const { error } = await supabase
        .from('products')
        .update({ quantity: newVal })
        .eq('id', dataSupaId);

      if (error) {
        console.error('Error al actualizar:', error);
        // Fall back to the local system if the network fails
        setCurrentQuantity(quantity); 
      } else {
        console.log('DB actualizada con:', newVal);
      }
    }, 500); 
  };

   const handleDecrease = () => {
    if (currentQuantity <= 0) return;
    const nextVal = currentQuantity - 1;
    setCurrentQuantity(nextVal);
    updateSupabase(nextVal);     
  };

  const handleIncrease = () => {
    const nextVal = currentQuantity + 1;
    setCurrentQuantity(nextVal);
    updateSupabase(nextVal); 
  };

  // Clean up when removing component
  React.useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  return (
    <div className={classes.wrapperCounter}>
      <button type="button" className={classes.minus} onClick={handleDecrease}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="7"
            stroke="var(--primary_dark)"
            strokeWidth="2"
          />
          <path
            d="M20 16H12"
            stroke="var(--primary_dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className={classes.units}>{currentQuantity}</p>

      <button type="button" className={classes.plus} onClick={handleIncrease}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="7"
            stroke="var(--primary_dark)"
            strokeWidth="2"
          />
          <path
            d="M20 16H12M16 12V20"
            stroke="var(--primary_dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
