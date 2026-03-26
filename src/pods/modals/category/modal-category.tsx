import React from 'react';
import classes from './modal-category.module.css';
import { CloseButton } from '@/components/buttons/button-close/button-close';

export const ModalCategory: React.FC = () => {


  return (
    <dialog role="dialog" className={classes.modalCategory}>
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
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
            <li role="option" aria-selected="false" id="">
              <button>Caterogy 1</button>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  );
};
