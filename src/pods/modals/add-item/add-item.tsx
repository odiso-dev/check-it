import React from 'react';
import { InputItem } from '@/components/inputs/input-item-product-category/input-item';
import { AddItem } from '@/components/buttons/add-item/add-item';
import { SelectCategory } from '@/components/buttons/select-category/select-category';
import classes from './add-item.module.css';

export const AddItemModal: React.FC = () => {
  return (
    <form className={classes.addItemModal}>
      <InputItem type="category" placeholder="category" required />
      <AddItem />
      <hr></hr>
      <InputItem type="product" placeholder="product" required />
      <SelectCategory />
      <AddItem />
    </form>
  );
};
