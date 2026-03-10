import React from 'react';
import classes from './layoutModalFull.module.css';
import { CloseButton } from '@/components/buttons/closeButton';
// import { ModalContext } from '@/context/modalContext';

// type of modal children rendering
type ModalVariant = 'info' | 'addItems';

interface Props {
  children: React.ReactNode;
  variant?: ModalVariant;
}
export const LayoutModalFull: React.FC<Props> = (props) => {
  const { children, variant } = props;
  // Context
  // const { isModalOpen } = React.useContext(ModalContext);

  return (
    <div
      className={`${classes.layoutModal} ${variant ? classes[variant] : ''} `}
    >
      <CloseButton classname={classes.closeModal} />
      {children}
    </div>
  );
};
