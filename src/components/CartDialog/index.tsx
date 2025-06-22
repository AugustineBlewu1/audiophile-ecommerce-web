"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { useCartDialog, useCartStore } from "@/lib/store";
import { Button } from "../ui/button";
import CounterButton from "../CounterButton";

export function CartDialog() {
  const { showDialog, dialogOpen: open, closeDialog } = useCartDialog();
  const {
    addProduct,
    clearCart,
    clearProductItem,
    products,
    totalProducts,
    updateProduct,
    removeAProduct,
    singleProductTotal,
    totalPrice
  } = useCartStore();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      showDialog();
    } else {
      closeDialog();
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="top-32 left-auto right-30 translate-y-0 translate-x-0 [&>button:last-child]:hidden w-[450px]">
        <DialogHeader className="flex flex-row justify-between">
          <h3 className="font-extrabold">CART ({products?.length })</h3>
          <h5 className="text-sm hover:underline" onClick={clearCart}>
            Remove All
          </h5>
        </DialogHeader>
        {products?.map((product) => (
          <div className="flex flex-row items-center justify-between ">
            <img src={product?.image} alt="" className="w-20 h-20 rounded-md" />
            <div className="text-start">
              <h4 className="font-bold text-sm break-words whitespace-normal  w-32">{product?.name}</h4>
              <h5 className="font-medium text-secondary/50">
                $ {product?.price}
              </h5>
            </div>
            <CounterButton
              value={singleProductTotal(product?.slug)}
              increment={() => {
                addProduct({
                  image: product?.image,
                  name: product?.name,
                  price: product?.price,
                  quantity: 1,
                  slug: product?.slug,
                });
              }}
              decrement={() => {
                if (singleProductTotal(product?.slug) > 1) {
                  removeAProduct(product?.slug);
                }
              }}
            />
          </div>
        ))}
        <div className="flex flex-row justify-between">
            <h4 className="text-secondary/50  font-medium">TOTAL</h4>
            <h5 className="font-extrabold text-xl">$ {totalPrice()?.toLocaleString()}</h5>
          </div>
        <DialogFooter className="w-full">
          
          <Button className="w-full" size={"lg"}>
            CHECK OUT
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
