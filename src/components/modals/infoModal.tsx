import React from 'react';
import classes from './info-modal.module.css';
import { CloseButton } from '@/components/buttons/closeButton';

export const InfoModal: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  console.log(open);

  const toggleModal = () => setOpen(!open);

  return (
    <div className={classes.infoModal} data-state={open}>
      <CloseButton classname={classes.closeModal} onClose={toggleModal} />
      <div className={classes.infoModalTitle}>
        <h1>Welcome</h1>
      </div>
      <div className={classes.infoModalContent}>
        <p>
          <strong>CheckIt</strong> allows you to keep your shopping list well
          organized so you don't forget anything. Add a category or supermarket.
          Add a product and choose which category or supermarket it will belong
          to. If you don't assign a category, it will be included in
          ‘Uncategorized’ by default. Let's start by adding some products to
          keep everything organized!
        </p>
      </div>
    </div>
  );
};
