import React from 'react';

type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalType: string;
  children: React.PropsWithChildren;
};
// Create context
export const ModalContext = React.createContext<ModalContextType | null>(null);

/* export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("useModal must be used inside ModalProvider");
  return context;
}; */
