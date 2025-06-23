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
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    totalPrice,
  } = useCartStore();

  const router = useRouter();

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      showDialog();
    } else {
      closeDialog();
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="md:top-20  lg:top-32 md:left-auto lg:right-30  md:right-26  md:translate-y-0 md:translate-x-0 [&>button:last-child]:hidden w-[450px]">
        <DialogHeader className="flex flex-row justify-between">
          <h3 className="font-extrabold">CART ({products?.length})</h3>
          {products?.length > 0 && <h5 className="text-sm hover:underline" onClick={clearCart}>
            Remove All
          </h5>}
        </DialogHeader>
        {products?.length === 0 && (
          <div className="flex justify-center flex-col items-center">
            <Image src={"/assets/checkout/cart-empty.png" } alt="Empty Cart Icon" width={100} height={100}/>
            <h3 className="font-bold">No Item in Cart</h3>
          </div>
        )}
        {products?.map((product, index) => (
          <div
            className="flex flex-row items-center justify-between "
            key={index}
          >
            <img src={product?.image} alt="" className="md:w-20 md:h-20 w-10 h-10 rounded-md" />
            <div className="text-start">
              <h4 className="font-bold md:text-sm text-[10px] break-words whitespace-normal w-20 lg:w-32">
                {product?.name}
              </h4>
              <h5 className="font-medium text-secondary/50 text-sm md:text-lg">
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
        { products?.length > 0 && <div className="flex flex-row justify-between">
          <h4 className="text-secondary/50  font-medium">TOTAL</h4>
          <h5 className="font-extrabold lg:text-xl text-lg">
            $ {totalPrice()?.toLocaleString()}
          </h5>
        </div>}
        <DialogFooter className="w-full">
          { products?.length > 0 && <Button
            className="w-full"
            size={"lg"}
            onClick={() => {
              router?.push("/checkout");
              closeDialog();
            }}
          >
            CHECK OUT
          </Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
