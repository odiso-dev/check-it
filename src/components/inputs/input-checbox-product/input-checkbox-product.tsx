import React from 'react';
import classes from './input-checkbox-product.module.css';

export const InputCheckbox: React.FC = () => {
  return (
    <>
      <fieldset className={classes.fieldsetProduct}>
        <input type="checkbox" name="" id="product_checkbox" />
        <svg
          width="48"
          height="48"
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

        <label htmlFor="product_checkbox">Product example</label>
      </fieldset>
    </>
  );
};
