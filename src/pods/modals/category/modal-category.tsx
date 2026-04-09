import React from 'react';
import classes from './modal-category.module.css';
import { CloseButton } from '@/components/buttons/button-close/button-close';
import {ChannelRealtimeContext} from '@/context/channel-context';
import {ModalCategoryContext} from '@/context/modal-category-context';

export const ModalCategory: React.FC = () => {
  const subModalType:string = 'categories';
  const {categories} = React.useContext(ChannelRealtimeContext);
  const {categorySelected, setCategorySelected} = React.useContext(ModalCategoryContext);

  console.log(categorySelected)
  

  return (
    <dialog role="dialog" className={classes.modalCategory} data-modal-type={subModalType}>
      <CloseButton />
      <div
        className={classes.wrapperModalCategory}
        role="listbox"
        tabIndex="-1"
        aria-labelledby="select_item"
        id="category_list"
      >
        <div className={classes.modalCategoryTitle}>
          <h2>Current product name</h2>
          <hr />
        </div>
        <div className={classes.modalCategoryContent}>
          <ul>
            {categories.map(category=>(
               <li key={category.id} role="option" aria-selected="false" id={`category_${category.id}`}>
              <button value={category.name} onClick={(e)=>setCategorySelected(e.currentTarget.value)}>{category.name}</button>
            </li>
            ))}           
          </ul>
        </div>
      </div>
    </dialog>
  );
};
