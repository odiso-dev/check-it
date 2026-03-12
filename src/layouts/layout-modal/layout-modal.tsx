import React from 'react';
import classes from './layout-modal.module.css';
import { CloseButton } from '@/components/buttons/close';

// type of modal children rendering
type ModalVariant = 'info' | 'addItems';

interface Props {
  children: React.ReactNode;
  variant?: ModalVariant;
}
export const LayoutModalFull: React.FC<Props> = (props) => {
  const { children, variant } = props;

  return (
    <div
      className={`${classes.layoutModal} ${variant ? classes[variant] : ''} `}
    >
      <CloseButton classname={classes.closeModal} />
      {children}
    </div>
  );
};
