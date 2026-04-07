import React from 'react';
import { InputTextItem } from '@/components/inputs/input-text-product-category/input-text';
import { ButtonAddItem } from '@/components/buttons/button-add-item/button-add-item';
import { SelectCategory } from '@/components/buttons/button-select-category/button-select-category';
import classes from './modal-add-item.module.css';

export const AddItemModal: React.FC = () => {
  const[value, setValue] =  React.useState<string>('');

  return (
    <form className={classes.addItemModal} id="add_item_modal">
      <InputTextItem type="category" placeholder="category" required value={value} onchange={(e)=>setValue(e.target.value)}/>
      <ButtonAddItem value={value} onClear={()=>setValue('')}/>
      <hr></hr>
      <InputTextItem type="product" placeholder="product" required />
      <SelectCategory />
      <ButtonAddItem />
    </form>
  );
};
