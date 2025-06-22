import { useStore } from "zustand";
import { CartDialogState } from "./cart-dialog";
import { CartState } from "./cart-store";



export const useCartDialog = () => {
  const showDialog = useStore(CartDialogState, (state) => state.openModal);
  const closeDialog = useStore(CartDialogState, (state) => state.closeModal);
  const dialogOpen = useStore(CartDialogState, (state) => state.isOpen);

  return {
    showDialog,
    closeDialog,
    dialogOpen,
  };
};

export const useCartStore = () => {
const products = useStore(CartState, (state) => state.products);
const addProduct = useStore(CartState, (state) => state.addProduct);
const clearProductItem = useStore(CartState, (state) => state.clearProductItem);
const updateProduct = useStore(CartState, (state) => state.updateProduct);
const clearCart = useStore(CartState, (state) => state.clearCart);
const totalProducts = useStore(CartState, (state) => state.totalProducts);
const singleProductTotal = useStore(CartState, (state) => state.singleProductTotal);
const removeAProduct = useStore(CartState, (state) => state.removeAProduct);
const totalPrice = useStore(CartState, (state) => state.totalPrice);

return {
    products,
    addProduct,
    clearProductItem,
    updateProduct,
    clearCart,
    totalProducts,
    singleProductTotal,
    removeAProduct,
    totalPrice
}
}