"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FullNavbar from "./FullNavbar";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Close menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed flex items-center justify-between px-12 py-2 bg-black/10 text-white z-4 w-screen">
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

      {isMenuOpen && <FullNavbar onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar2;
