import React from 'react';
import classes from './add-item.module.css';

export const AddItem: React.FC = () => {
  return <button className={classes.btnAdd} type="button">Add item</button>;
};
