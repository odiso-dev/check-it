import React from 'react';
import classes from './product.module.css';
import { InputCheckbox } from '@/components/inputs/input-checbox-product/input-checkbox-product';
import { ItemCounter } from '@/components/buttons/button-item-counter/item-counter';

export const Product: React.FC = () => {
  return (
    <fieldset className={classes.fieldsetProduct}>
      <InputCheckbox />
      <ItemCounter />
    </fieldset>
  );
};
