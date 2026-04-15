import React from 'react';
import { InputTextItem } from '@/components/inputs/input-text-product-category/input-text';
import { ButtonAddItem } from '@/components/buttons/button-add-item/button-add-item';
import { SelectCategory } from '@/components/buttons/button-select-category/button-select-category';
import { ModalCategoryContext } from '@/context/modal-category-context';
import classes from './modal-add-item.module.css';

export const AddItemModal: React.FC = () => {
  // Input text value
  const [valueInputCategory, setValueInputCategory] = React.useState<string>('');
  const [valueInputProduct, setValueInputProduct] = React.useState<string>('');
  const { isSelected } = React.useContext(ModalCategoryContext);

  return (
    <form className={classes.addItemModal} id="add_item_modal">
      <InputTextItem
        type="category"
        placeholder="category"
        required
        value={valueInputCategory}
        onChange={(e) => setValueInputCategory(e.target.value)}
      />
      <ButtonAddItem
        value={valueInputCategory}
        onClear={() => setValueInputCategory('')}
        isDisabled={valueInputCategory.length === 0}
      />
      <hr></hr>
      <InputTextItem type="product" placeholder="product" required 
      value={valueInputProduct}
      onChange={(e) => setValueInputProduct(e.target.value)}/>
      <SelectCategory isDisabled={valueInputProduct.length === 0} />
      {<ButtonAddItem isDisabled={isSelected && valueInputProduct.length !== 0 ? false: true} />}      
    </form>
  );
};
