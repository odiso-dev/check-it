import React from 'react';
import classes from './layoutModalFull.module.css';
import { CloseButton } from '@/components/buttons/closeButton';

// type of modal children rendering
type ModalVariant = 'info' | 'addItems';

interface Props{
  children: React.ReactNode;
  variant?: ModalVariant;
}
export const LayoutModalFull: React.FC<Props> = (props) => {
  const { children, variant } = props;
  const [isVisible, setIsVisible] = React.useState(true);
  
  const handleVisibility = () => setIsVisible(false);
  
  return (
    <div
      className={`${classes.layoutModal} ${variant ? classes[variant] : ''} ${!isVisible ? classes.hidden : ''} `}
    >
      <CloseButton
        classname={classes.closeModal}
        modalState={handleVisibility}
      />
      {children}
    </div>
  );
};
