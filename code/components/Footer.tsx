import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[70vh] bg-slate-900 flex py-16 px-20">
      <div className="w-[75vw] h-full">
        <div className="text-white tracking-wide underline">
          <h1
            className="uppercase text-3xl"
            style={{ fontFamily: "organetto" }}
          >
            Indian Space Research Organisation,
          </h1>
          <h2
            className="uppercase text-3xl"
            style={{ fontFamily: "organetto" }}
          >
            Department of Space
          </h2>
        </div>
        <div
          className="max-w-6xl mx-auto text-white mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          style={{ fontFamily: "inter" }}
        >
          {/* Column 1 */}
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Address
            </a>
            <a href="#" className="block hover:underline">
              RTI
            </a>
            <a href="#" className="block hover:underline">
              Feedback
            </a>
            <a href="#" className="block hover:underline">
              Contact Us
            </a>
            <a href="#" className="block hover:underline">
              FAQ
            </a>
            <a href="#" className="block hover:underline">
              Website Policy
            </a>
            <a href="#" className="block hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Hyper Linking Policy
            </a>
            <a href="#" className="block hover:underline">
              Terms of Use
            </a>
            <a href="#" className="block hover:underline">
              Archives
            </a>
            <a href="#" className="block hover:underline">
              Web Information Manager
            </a>
            <a href="#" className="block hover:underline">
              Space Policy
            </a>
            <a href="#" className="block hover:underline">
              Parliament Questions
            </a>
            <a href="#" className="block hover:underline">
              PIB
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              e-Saral Hindi Vakyakosh
            </a>
            <a href="#" className="block hover:underline">
              Related Links
            </a>
            <a href="#" className="block hover:underline">
              Check Your 7th CPC Pension Revision Status
            </a>
            <a href="#" className="block hover:underline">
              Pensioners' Portal
            </a>
            <a href="#" className="block hover:underline">
              Site Map
            </a>
            <a href="#" className="block hover:underline">
              Help
            </a>
          </div>
        </div>
      </div>
      <div className="w-[25vw] h-full flex flex-col items-center justify-center">
        <Image
          src={"/images/satyamev-jayate.png"}
          width={180}
          height={200}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Footer;
