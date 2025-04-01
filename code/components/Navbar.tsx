"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import FullNavbar from "./FullNavbar2";
const Navbar = () => {
  const menuItems = [
    { link: "/about", title: "About" },
    { link: "/missions", title: "Mission" },
    { link: "/history", title: "History" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-black/20 text-white fixed z-20 w-screen">
      <div className="text-xl font-bold">
        <Image src="/images/ISRO.png" width={60} height={80} alt="ISRO logo" />
      </div>
      <div className="hidden md:flex space-x-12 items-center">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="uppercase text-xl tracking-wide"
            style={{ fontFamily: "fsp" }}
          >
            {item.title}
          </Link>
        ))}

        <div className="flex space-x-8">
          <CgMenuLeft
            size={28}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {isMenuOpen && <FullNavbar onClose={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
