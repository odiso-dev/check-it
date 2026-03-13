import React from 'react';
import { InputItem } from '@/components/inputs/input-item-product-category/input-item';
import { ButtonAddItem } from '@/components/buttons/btn-add-item/btn-add-item';
import { SelectCategory } from '@/components/buttons/select-category/select-category';
import classes from './add-item.module.css';

export const AddItemModal: React.FC = () => {
  return (
    <form className={classes.addItemModal} id="add_item_modal">
      <InputItem type="category" placeholder="category" required />
      <ButtonAddItem />
      <hr></hr>
      <InputItem type="product" placeholder="product" required />
      <SelectCategory />
      <ButtonAddItem />
    </form>
  );
};
