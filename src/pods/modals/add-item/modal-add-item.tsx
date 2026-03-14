import React from 'react';
import { InputItem } from '@/components/inputs/input-item-product-category/input-item';
import { ButtonAddItem } from '@/components/buttons/button-add-item/button-add-item';
import { SelectCategory } from '@/components/buttons/button-select-category/button-select-category';
import classes from './modal-add-item.module.css';

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
