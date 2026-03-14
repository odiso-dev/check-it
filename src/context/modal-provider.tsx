import React from 'react';
import { ModalContext } from './modal-context';

// Create context provider
export const ModalProvider: React.FC<ModalContextType> = (props) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(() => {
    const saved = localStorage.getItem('modalOpened');
    if (saved === 'true') return true;
    if (saved === 'false') return false;
    return true;
  });
  const [modalType, setModalType] = React.useState('info');

  React.useEffect(() => {
    // Add attr modal state in html
    document.documentElement.setAttribute('data-modal', String(isModalOpen));
    // Store modal state in localStorage
    localStorage.setItem('modalOpened', isModalOpen ? 'true' : 'false');
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalType, setModalType }}
    >
      {children}
    </ModalContext.Provider>
  );
};
