"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";
import FullNavbar from "./FullNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-black/10 text-white fixed z-10 w-screen">
      <div className="text-xl font-bold">
        <Link href={"/"} className="cursor-pointer">
          <Image src={"/images/ISRO.png"} width={60} height={80} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        {["Climate", "Species", "Moons"].map((item, index) => (
          <Link
            key={index}
            href="#"
            className="uppercase text-lg tracking-wide"
            style={{ fontFamily: "fsp" }}
          >
            {item}
          </Link>
        ))}
        <button onClick={() => setIsMenuOpen(true)}>
          <CgMenuLeft size={28} className="cursor-pointer" />
        </button>
      </div>

      {/* Only render FullNavbar on the client */}
      {isMounted && (
        <div
          className={`fixed inset-0 z-20 bg-black/40 backdrop-blur-sm flex justify-end transition-transform duration-300  ease-initial ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isMenuOpen && <FullNavbar onClose={() => setIsMenuOpen(false)} />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
