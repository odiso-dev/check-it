import React from 'react';
import { InputTextItem } from '@/components/inputs/input-text-product-category/input-text';
import { ButtonAddItem } from '@/components/buttons/button-add-item/button-add-item';
import { SelectCategory } from '@/components/buttons/button-select-category/button-select-category';
import { ModalCategoryContext } from '@/context/modal-category-context';
import classes from './modal-add-item.module.css';

export const AddItemModal: React.FC = () => {
  // Input text value
  const [value, setValue] = React.useState<string>('');
  const { isSelected } = React.useContext(ModalCategoryContext);

  return (
    <form className={classes.addItemModal} id="add_item_modal">
      <InputTextItem
        type="category"
        placeholder="category"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonAddItem
        value={value}
        onClear={() => setValue('')}
        isDisabled={value.length === 0}
      />
      <hr></hr>
      <InputTextItem type="product" placeholder="product" required />
      <SelectCategory isDisabled />
      <ButtonAddItem isDisabled={!isSelected ? true : false} />
    </form>
  );
};
