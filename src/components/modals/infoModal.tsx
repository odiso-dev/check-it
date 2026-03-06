import React from 'react';
import classes from './info-modal.module.css';

export const InfoModal: React.FC = () => {
  return (
    <div className={classes.infoModal}>
      <div className="info_modal__title">
        <h1>Welcome</h1>
      </div>
      <div className="info_modal__content">
        <p>
          <strong>CheckIt</strong> allows you to keep your shopping list well
          organized so you don't forget anything.
        </p>
        <p>
          Add a category or supermarket. Add a product and choose which category
          or supermarket it will belong to.
        </p>
        <p>
          If you don't assign a category, it will be included in ‘Uncategorized’
          by default. Let's start by adding some products to keep everything
          organized!
        </p>
      </div>
    </div>
  );
};
