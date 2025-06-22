"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useCartStore, useSuccessDialog } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { CheckOutSuccessDialog } from "@/components/CheckSuccessDialog";
import Footer from "@/components/Footer";

//  Zod schema
const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is too short"),
  phoneNumber: z.string().min(5, "Phone Number is too short"),
  city: z.string().min(1, "City is required"),
  zipCode: z.string().min(4, "Invalid zipCode code"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.enum(["card", "paypal", "mobile"]),
});

// Infer  types
type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const {
    addProduct,
    clearCart,
    clearProductItem,
    products,
    totalProducts,
    updateProduct,
    singleProductTotal,
    removeAProduct,
    totalPrice
  } = useCartStore();
  const router = useRouter();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
      paymentMethod: "card",
    },
  });

  const vatAmount = totalPrice() * 0.20;
  const shippingFee = 50;
  const grandTotal = totalPrice() - (vatAmount + shippingFee) 
  const { showDialog, dialogOpen: open, closeDialog } = useSuccessDialog();


  const onSubmit = (values: any) => {};




  return (
    <>

    <div className="bg-muted">
      <Navbar />
      <div className="mt-24 py-14 container mx-auto px-24 ">
        <h4
          onClick={router.back}
          className="text-secondary/50 text-lg hover:cursor-pointer hover:text-secondary/30 mb-16"
        >
          Go Back
        </h4>
        <div className="flex flex-row gap-x-12">
          <div className="py-16 bg-white rounded-lg px-16 w-2/3">
            <h4 className="font-extrabold text-3xl pb-8">CHECKOUT</h4>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <h4 className="text-primary uppercase tracking-wide">
                  Billing Details
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Alexei Ward" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="alexi@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+1 202-555-0136" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="+1 202-555-0136" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Zip Code
                          {/* <span className="text-red-500">*</span> */}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="10001" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          City <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter contact person's name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
          <div className="bg-white w-1/3 rounded-lg py-7 px-8">
            <h4 className="font-bold text-lg">SUMMARY</h4>
            <div className="space-y-6 pt-6">
              {products?.map((product) => (
                <div className="flex flex-row items-center justify-between  ">
                  <div className="flex flex-row items-center justify-between gap-5">
                    <img
                      src={product?.image}
                      alt=""
                      className="w-20 h-20 rounded-md"
                    />
                    <div className="text-start">
                      <h4 className="font-bold text-sm break-words whitespace-normal  w-32">
                        {product?.name}
                      </h4>
                      <h5 className="font-medium text-secondary/50">
                        $ {product?.price}
                      </h5>
                    </div>
                  </div>
                  <span className="text-secondary/50">
                    x{product?.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-8">
          
            <div className="flex flex-row justify-between">
              <h4 className="text-secondary/50  font-medium">TOTAL</h4>
              <h5 className="font-extrabold text-xl">
                $ {totalPrice()?.toLocaleString()}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="text-secondary/50  font-medium">SHIPPING</h4>
              <h5 className="font-extrabold text-xl">
                $ {50}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="text-secondary/50  font-medium">VAT (INCLUDED)</h4>
              <h5 className="font-extrabold text-xl">
                $ {vatAmount}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="text-secondary/50  font-medium">GRAND TOTAL</h4>
              <h5 className="font-extrabold text-xl text-primary">
                $ {grandTotal}
              </h5>
            </div>
              </div>
              <Button className="w-full mt-5" size={"lg"} onClick={showDialog}>CONTINUE & PAY</Button>
          </div>
        </div>
      </div>

    <Footer />
    </div>
    <CheckOutSuccessDialog />
    </>
  );
}
