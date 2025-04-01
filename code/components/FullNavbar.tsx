import React from "react";
import Link from "next/link";
import { BiX } from "react-icons/bi";

type FullNavbarProps = {
  onClose: () => void;
};

const links = [
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
  { link: "/history", title: "History" },
  { link: "/career", title: "Career" },
  { link: "/people", title: "People" },
];

const FullNavbar: React.FC<FullNavbarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-20 bg-white/30 backdrop-blur-sm flex justify-end">
      <div className="relative h-screen w-[33vw] bg-white shadow-lg flex flex-col items-center justify-center">
        <button
          className="absolute top-8 right-[3.2rem] text-black text-3xl hover:opacity-70 transition"
          onClick={onClose}
        >
          <BiX className="h-8 w-8" />
        </button>

        <nav className="flex flex-col absolute top-20 right-[3.2rem] space-y-6">
          {links.map(({ link, title }, index) => (
            <Link
              key={index}
              href={link}
              className="text-lg text-black transition uppercase"
            >
              <p className="relative text-right after:block after:h-[2px] after:bg-black after:w-0 after:left-0 after:bottom-0 after:absolute after:transition-all after:duration-300 hover:after:w-full font-semibold tracking-wider">
                {title}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FullNavbar;
