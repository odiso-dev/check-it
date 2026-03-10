import React from 'react';
import { ModalContext } from './modalContext';

// Create context provider
export const ModalProvider: React.FC<ModalContextType> = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem('modalOpened');
    if (saved === 'true') return true;
    if (saved === 'false') return false;
    return true;
  });

  console.log(localStorage);
  console.warn(isModalOpen);

  React.useEffect(() => {
    // Add attr modal state in html
    document.documentElement.setAttribute('data-modal', String(isModalOpen));
    // Store modal state in localStorage
    localStorage.setItem('modalOpened', isModalOpen ? 'true' : 'false');
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
