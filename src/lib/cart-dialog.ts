import { create } from "zustand";

export const CartDialogState = create<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));


export const SuccessDialogStore = create<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));