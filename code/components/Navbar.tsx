import React from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";

const Navbar = () => {
  const menuItems = ["Climate", "Species", "Moons"];

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-black/10 text-white fixed z-2 w-screen">
      <div className="text-xl font-bold">
        <Image src={"/images/ISRO.png"} width={60} height={80} alt="logo" />
      </div>
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="uppercase text-lg tracking-wide"
            style={{ fontFamily: "fsp" }}
          >
            {item}
          </Link>
        ))}
        <CgMenuLeft size={28} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
