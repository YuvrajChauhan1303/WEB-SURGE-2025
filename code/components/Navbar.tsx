import React from 'react';
import Link from 'next/link';
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const menuItems = ["Climate", "Species", "Moons"];

  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-black text-white'>
      <div className='text-xl font-bold'>LOGO</div>
      <div className='hidden md:flex space-x-8'>
        {menuItems.map((item, index) => (
          <Link key={index} href='#' className='uppercase text-lg tracking-wide'  style={{ fontFamily: 'fsp' }}>
            {item}
          </Link>
        ))}
        <CgMenuLeft size={28} className='cursor-pointer' />
      </div>
      
     
    </nav>
  );
};

export default Navbar;
