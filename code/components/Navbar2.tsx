import React from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";

const Navbar2 = () => {
  const menuItems = ["Climate", "Species", "Moons"];

  return (
    <nav className=" flex items-center justify-between px-12 py-2 bg-black/10 text-white  z-2 w-screen">
      <div className="text-xl font-bold">
        <Image src={"/images/ISRO.png"} width={60} height={80} alt="logo" />
      </div>
      <div className="flex space-x-8">
        <CgMenuLeft size={28} className="cursor-pointer text-black" />
      </div>
    </nav>
  );
};

export default Navbar2;
