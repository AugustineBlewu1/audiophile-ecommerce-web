"use client";

import { useCartDialog, useCartStore } from "@/lib/store";
import { navItems } from "@/lib/variables";
import Link from "next/link";
import React, { useState } from "react";
import { CartDialog } from "../CartDialog";

const Navbar = () => {
  const { showDialog, closeDialog, dialogOpen } = useCartDialog();
  const { totalProducts } = useCartStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCartToggle = () => {
    if (dialogOpen) {
      closeDialog();
    } else {
      showDialog();
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 py-8 w-full z-20 bg-[#191919]">
        <div className="md:max-w-[800px] 2xl:max-w-[1350px] lg:max-w-[1200px] lg:mx-auto flex justify-between items-center w-full px-4 md:px-8">
          <div className="inline-flex items-center gap-x-5.5">
            {/*  mobile humburger*/}
            <div className="lg:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={handleMobileMenuToggle}
                aria-label="Open menu"
              >
                <img
                  src={"/assets/shared/tablet/icon-hamburger.svg"}
                  alt="Menu Icon"
                />
              </button>
            </div>
            <Link className="text-white text-2xl font-extrabold" href={"/"}>
              audiophile
            </Link>
          </div>
          {/* Desktop nav */}
          <div className="hidden lg:flex space-x-8">
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
          {/* Cart Icon */}
          <div
            className="relative hover:cursor-pointer"
            onClick={handleCartToggle}
          >
            <img src={"/assets/shared/desktop/icon-cart.svg"} alt="Cart Icon" />
            {totalProducts() > 0 && (
              <div className="absolute -top-3 -right-4 h-6 w-6 bg-primary text-white rounded-full items-center text-center flex justify-center">
                {totalProducts()}
              </div>
            )}
          </div>
        </div>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-black bg-opacity-60 flex flex-col md:hidden">
            <div className="bg-[#191919] p-8 pt-24 flex flex-col space-y-6">
              <button
                className="self-end mb-4"
                onClick={handleMobileMenuClose}
                aria-label="Close menu"
              >
                <img
                  src="/assets/shared/tablet/icon-close.svg"
                  alt="Close Menu"
                  className="h-6 w-6"
                />
              </button>
              {navItems?.map((navItem, index) => (
                <Link
                  href={navItem.link}
                  key={index}
                  className="text-white font-medium tracking-widest text-lg hover:text-primary"
                  onClick={handleMobileMenuClose}
                >
                  {navItem?.name?.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <CartDialog />
    </>
  );
};

export default Navbar;
