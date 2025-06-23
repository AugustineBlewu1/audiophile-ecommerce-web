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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

//  Zod schema
const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is too short"),
  phoneNumber: z.string().min(5, "Phone Number is too short"),
  city: z.string().min(1, "City is required"),
  zipCode: z.string().min(4, "Invalid zipCode code"),
  country: z.string().min(1, "Country is required"),
  eMoneyNumber: z.string().min(5, "E - Money Number is required"),
  eMoneyPIN: z.string().min(4, "E - Money PIN is required"),
  paymentMethod: z.enum(["e-money", "cash-on-delivery"]),
});

// Infer  types
type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const {
    products,
    totalPrice,
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
      paymentMethod: "e-money",
      eMoneyNumber : "",
      eMoneyPIN : "",
    },
  });

  const vatAmount = (totalPrice() * 0.2)?.toFixed(2);
  const shippingFee = 50;
  const grandTotal = totalPrice() - (Number(vatAmount) + Number(shippingFee));
  const { showDialog, dialogOpen: open, closeDialog } = useSuccessDialog();

  const onSubmit = (values: any) => {
    
    showDialog()
  };

  return (
    <>
      <div className="bg-muted">
        <Navbar />
        <div className="mt-24 py-14 container mx-auto lg:px-24 px-4 md:py-8 ">
          <h4
            onClick={router.back}
            className="text-secondary/50 text-lg hover:cursor-pointer hover:text-secondary/30 lg:mb-16 mb-7"
          >
            Go Back
          </h4>
          <div className="flex lg:flex-row flex-col gap-y-5 gap-x-12">
            <div className="lg:py-16 py-5 bg-white rounded-lg px-4 lg:px-16 lg:w-2/3">
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
                            Name 
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
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="alexi@mail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone Number 
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+1 202-555-0136" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <h4 className="text-primary uppercase tracking-wide">
                    Shipping info
                  </h4>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Address 
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1137 Williams Avenue"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <Input
                              placeholder="10001"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            City 
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Country
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="United States" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <h4 className="text-primary uppercase tracking-wide">
                    Payment Details
                  </h4>
                  
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="flex flex-col md:flex-row md:items-start justify-between">
                          <FormLabel>
                            Payment Method{" "}
                          </FormLabel>
                          <FormControl>
                            <RadioGroup defaultValue="e-money" >
                              <div className="flex items-center space-x-2 border-2  py-5 md:w-85 lg:w-90 rounded-md px-4 ">
                                <RadioGroupItem
                                  value="e-money"
                                  id="e-money"
                                />
                                <Label htmlFor="e-money">e-Money</Label>
                              </div>
                              <div className="flex items-center space-x-2 border-2  py-5  md:w-85 lg:w-90 rounded-md px-4 w-full">
                                <RadioGroupItem
                                  value="cash-on-delivery"
                                  id="cash-on-delivery"
                                />
                                <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
                              </div>
                            </RadioGroup>

                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
           
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="eMoneyNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            e-Money Number{" "}
                            
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="238521993" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eMoneyPIN"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            e-Money PIN 
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="6891" {...field} type="number" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
            <div className="bg-white lg:w-1/3 h-fit rounded-lg py-7 px-8">
              <h4 className="font-bold text-lg">SUMMARY</h4>
              <div className="space-y-6 pt-6">
                {products?.map((product, index) => (
                  <div
                    className="flex flex-row items-center justify-between  "
                    key={index}
                  >
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
                  <h5 className="font-extrabold text-xl">$ {50}</h5>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-secondary/50  font-medium">
                    VAT (INCLUDED)
                  </h4>
                  <h5 className="font-extrabold text-xl">
                    $ {vatAmount?.toLocaleString()}
                  </h5>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-secondary/50  font-medium">
                    GRAND TOTAL
                  </h4>
                  <h5 className="font-extrabold text-xl text-primary">
                    $ {grandTotal}
                  </h5>
                </div>
              </div>
              <Button className="w-full mt-5" size={"lg"} type="submit" onClick={form.handleSubmit(onSubmit)}>
                CONTINUE & PAY
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <CheckOutSuccessDialog />
    </>
  );
}
