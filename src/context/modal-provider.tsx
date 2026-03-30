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
  const [isSubModalOpen, setIsSubModalOpen] =  React.useState(false)
  const [modalType, setModalType] = React.useState('info');

  React.useEffect(() => {
    // Clean attributes of html
    document.documentElement.removeAttribute('data-modal');
    document.documentElement.removeAttribute('data-modal-type');
    
    if(isModalOpen){
      // Add modal state attr in html
      document.documentElement.setAttribute('data-modal', String(isModalOpen));
      // Add modal type attr in html
      document.documentElement.setAttribute('data-modal-type', modalType);
    }
    // Store modal state in localStorage
    localStorage.setItem('modalOpened', isModalOpen ? 'true' : 'false');
  }, [isModalOpen, modalType]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    if(isSubModalOpen){
      setIsSubModalOpen(false)
    }else{
      setIsModalOpen(false)

    }
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen,isSubModalOpen,setIsSubModalOpen, openModal, closeModal, modalType, setModalType }}
    >
      {children}
    </ModalContext.Provider>
  );
};
