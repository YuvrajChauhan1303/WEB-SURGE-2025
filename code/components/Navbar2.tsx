"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";
import FullNavbar2 from "./FullNavbar2";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  return (
    <nav className="flex items-center justify-between px-12 py-2 bg-black/10 text-white z-2 w-screen">
      <Link href={"/"} className="cursor-pointer">
        <Image src={"/images/ISRO.png"} width={60} height={80} alt="logo" />
      </Link>

      {/* Menu Button */}
      <div className="flex space-x-8">
        <CgMenuLeft
          size={28}
          className="cursor-pointer text-black"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>

      {isMenuOpen && <FullNavbar2 onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar2;
