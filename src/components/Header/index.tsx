import React from "react";
import Navbar from "../Navbar";

function Header({ title }: { title: string }) {
  return (
    <div>
      <Navbar />
      <div className="bg-secondary w-full items-center h-80 mt-24 inset-0 flex justify-center">
        <h1 className="text-white uppercase tracking-wider text-3xl font-extrabold"> {title}</h1>
      </div>
    </div>
  );
}

export default Header;
