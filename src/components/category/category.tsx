import React from 'react';
import classes from './category.module.css';

import { InputCheckbox } from '@/components/inputs/input-checbox-product/input-checkbox-product';

interface Props {
  children: React.PropsWithChildren;
}

export const Category: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <details className={classes.category}>
      <summary>
        <h2 className={classes.categoryTitle}>Category</h2>
        <svg
          className={classes.arrow}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9139 15.9944L12.2871 9.79293C12.0957 9.582 12.0031 9.33591 12.0092 9.05466C12.0153 8.77342 12.1143 8.52733 12.3062 8.3164C12.4981 8.10547 12.7214 8 12.9761 8C13.2308 8 13.454 8.10547 13.6459 8.3164L19.5407 14.792C19.6938 14.9608 19.8086 15.1506 19.8852 15.3616C19.9617 15.5725 20 15.7834 20 15.9944C20 16.2053 19.9617 16.4162 19.8852 16.6272C19.8086 16.8381 19.6938 17.0279 19.5407 17.1967L13.6459 23.6934C13.4545 23.9043 13.2279 24.0064 12.9661 23.9997C12.7043 23.9929 12.478 23.8838 12.2871 23.6723C12.0962 23.4608 12.0005 23.2147 12 22.9341C11.9995 22.6534 12.0952 22.4073 12.2871 22.1958L17.9139 15.9944Z"
            fill="#2C004D"
          />
        </svg>
      </summary>
      <div className={classes.categoryContent}>
        {children}
        <form action="">
          <InputCheckbox />
        </form>
      </div>
    </details>
  );
};
