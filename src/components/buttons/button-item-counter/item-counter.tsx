import React from 'react';
import classes from './item-counter.module.css';

export const ItemCounter: React.FC = () => {
  const [units, setUnits] = React.useState<number>(1);

  const decrease = () => setUnits((prev) => (units > 1 ? prev - 1 : 1));
  const increase = () => setUnits((prev) => (units < 9 ? prev + 1 : 9));

  return (
    <div className={classes.wrapperCounter}>
      <button className={classes.minus} onClick={decrease}>
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

      <p className={classes.units}>{units}</p>

      <button className={classes.plus} onClick={increase}>
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
