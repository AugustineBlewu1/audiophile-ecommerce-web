"use client";

import { useCartDialog, useCartStore } from "@/lib/store";
import { navItems } from "@/lib/variables";
import Link from "next/link";
import React from "react";
import { CartDialog } from "../CartDialog";

const Navbar = () => {

  const { showDialog, closeDialog, dialogOpen } = useCartDialog();
  const {totalProducts} = useCartStore();

  const handleCartToggle = () => {
    if (dialogOpen) {
      closeDialog();
    } else {
      showDialog();
    }
  };
  
  return (
    <>
     <nav className="fixed top-0 left-0 right-0 py-8 w-full z-10  border-b border-[#979797] bg-[#191919] ">
      <div className="max-w-[1350px] mx-auto flex justify-between items-center ">
        <div className="inline-flex items-center gap-5.5">
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <img
                src={"/assets/shared/tablet/icon-hamburger.svg"}
                alt="Cart Icon"
              />
            </button>
          </div>
          <div className="text-white text-2xl font-extrabold ">audiophile</div>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems?.map((navItem, index) => (
            <Link
              href={navItem.link}
              key={index}
              className="text-white font-medium tracking-widest hover:text-primary"
            >
              {navItem?.name?.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="relative hover:cursor-pointer" onClick={handleCartToggle}>
          <img src={"/assets/shared/desktop/icon-cart.svg"} alt="Cart Icon" />
         { totalProducts() > 0  &&
          <div className="absolute -top-3 -right-4   h-6 w-6 bg-primary text-white rounded-full items-center text-center flex justify-center">{totalProducts()}</div>}
        </div>
      </div>
    </nav>

    <CartDialog />
    </>
   
  );
};

export default Navbar;
