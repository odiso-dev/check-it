import React from 'react';
import classes from './modal-category.module.css';
import { CloseButton } from '@/components/buttons/button-close/button-close';
import {ChannelRealtimeContext} from '@/context/channel-context'

export const ModalCategory: React.FC = () => {
  const subModalType:string = 'categories';
  const{categories} = React.useContext(ChannelRealtimeContext);
  

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
              <button>{category.name}</button>
            </li>
            ))}           
          </ul>
        </div>
      </div>
    </dialog>
  );
};
