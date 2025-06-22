"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { useCartStore, useSuccessDialog } from "@/lib/store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function CheckOutSuccessDialog() {
  const { showDialog, dialogOpen: open, closeDialog } = useSuccessDialog();
  const {
    clearCart,
    products,
    totalPrice,
  } = useCartStore();

  const router = useRouter()

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      showDialog();
    } else {
      closeDialog();
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="  [&>button:last-child]:hidden ">
        <DialogHeader className="flex flex-row justify-between">
          <div className="w-15 h-15 bg-primary rounded-full flex justify-center">
            <img src="/assets/checkout/icon-order-confirmation.svg" alt="" />
          </div>
        </DialogHeader>
        <h2 className="font-extrabold text-2xl">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>
        <p className="text-secondary/50 ">
          You will receive an email confirmation shortly.{" "}
        </p>

        <div className="rounded-lg w-full">
          <div className="flex flex-row rounded-2xl">
            <div className="flex flex-col bg-muted w-fit rounded-l-2xl px-8 py-7 ">
              <div className="flex flex-row">
                <img
                  src={products[0]?.image}
                  alt="Image Product"
                  className="w-15 h-15"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm break-words whitespace-normal  w-32">
                    {products[0]?.name}
                  </h4>
                  <h5 className="font-medium text-secondary/50">
                    $ {products[0]?.price}
                  </h5>
                </div>
                <p className="text-sm text-secondary/50">
                  {" "}
                  x{products[0]?.quantity}
                </p>
              </div>
              <div className="border my-4 "></div>
              {products?.length > 1 && (
                <p className="text-center text-secondary/50 ">
                  and {products?.length - 1} other item(s)
                </p>
              )}
            </div>
            <div className="bg-secondary text-start rounded-r-2xl  flex items-start space-y-5 justify-center flex-col px-10">
              <h4 className="text-muted/40 font-medium">GRAND TOTAL</h4>
              <h5 className="font-extrabold text-xl text-white">
                $ {totalPrice()?.toLocaleString()}
              </h5>
            </div>
          </div>
        </div>

        <DialogFooter className="w-full pt-5">
          <Button
            className="w-full"
            size={"lg"}
            onClick={() => {
              clearCart();
              closeDialog();

              router.replace('/')
            }}
          >
            BACK TO HOME
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
