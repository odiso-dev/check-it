import React from 'react';
import classes from './input-checkbox-product.module.css';

export const InputCheckbox: React.FC = (props) => {
  const{name, checked}= props;

  return (
    <>
      <input
        type="checkbox"
        name=""
        className={classes.productCheckbox}
        id={name}
        defaultChecked={checked}
      />

      <label htmlFor={name}>
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
