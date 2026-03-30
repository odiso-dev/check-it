import React from 'react';
import classes from './modal-category.module.css';
import { CloseButton } from '@/components/buttons/button-close/button-close';
import { ModalContext } from '@/context/modal-context';

export const ModalCategory: React.FC = () => {
  const { isModalOpen } = React.useContext(ModalContext);
  const subModalType:string = 'category';

  React.useEffect(() => {
    // Clean attributes of html
    // document.documentElement.removeAttribute('data-modal');
    document.documentElement.removeAttribute('data-submodal-type');
    if (isModalOpen) {
      // Add modal state attr in html
      // document.documentElement.setAttribute('data-modal', String(isModalOpen));
      // Add modal type attr in html
      document.documentElement.setAttribute('data-submodal-type', subModalType);
    }
  }, [isModalOpen]);

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
