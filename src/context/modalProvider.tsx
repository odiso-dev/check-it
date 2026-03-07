import React from 'react';
import { ModalContext } from './modalContext';

// Create context provider
export const ModalProvider: React.FC<ModalContextType> = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
