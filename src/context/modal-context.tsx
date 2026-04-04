import React from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  isSubModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalType: string;
  subModalType: string;
  children: React.PropsWithChildren;
};
// Create context
export const ModalContext = React.createContext<ModalContextType | null>(null);
