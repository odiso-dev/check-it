import {create} from 'zustand';

interface ToastState {
  title: string;
  text: string;
  type: ToastType;
  isOpen: boolean,
  showToast: (msg: string) => void;
  hideToast: () => void;
}

type ToastType = 'success' | 'info' | 'warning' | 'alert';

export const useToastStore = create<ToastState>((set) => ({
  title: '',
  text: '',
  type:'',
  isOpen: false,
  showToast: (title, text, type) => set({title, text, type, isOpen: true }),
  hideToast: () => set({ isOpen: false }),
}));
