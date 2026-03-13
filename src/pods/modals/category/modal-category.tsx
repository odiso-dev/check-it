import React from 'react';

export const ModalCategory: React.FC = () => {
  return (
    <div
      className={classes.modalCategory}
      role="listbox"
      tabIndex="-1"
      aria-labelledby="select_item"
      id="category_list"
    >
      <h2 className={classes.modalCategoryTitle}>Current product name</h2>
      <hr />
      <ul>
        <li role="option" aria-selected="false" id="">
          Caterogy 1
        </li>
        <li role="option" aria-selected="false" id="">
          Caterogy 1
        </li>
        <li role="option" aria-selected="false" id="">
          Caterogy 1
        </li>
      </ul>
    </div>
  );
};
