import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Title Section */}
      <div
        className="text-center py-16 bg-gray-200 shadow-md w-screen"
        style={{ fontFamily: "teko" }}
      >
        <h1 className="text-5xl font-bold tracking-wide">
          Department of Space
        </h1>
        <h2 className="text-6xl font-semibold">
          Indian Space Research Organization
        </h2>
      </div>

      <div className="w-full max-w-6xl bg-white p-10 rounded-xl mt-10">
        <h2 className="text-4xl font-bold text-center">Headquarters</h2>
        <div className="mt-4 text-lg flex flex-col items-center">
          <p className="font-semibold">
            Indian Space Research Organisation (ISRO)
          </p>
          <p>Antariksh Bhavan, New BEL Road</p>
          <p>Bangalore, Karnataka, India</p>
        </div>
      </div>

      {/* Regional Centers (2-Column Layout) */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-6">
        {/* VSSC */}
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">
            Vikram Sarabhai Space Centre (VSSC)
          </h3>
          <p className="mt-1">Thiruvananthapuram, Kerala, India</p>
          <p className="mt-2 text-gray-700">
            VSSC is ISRO's lead center for the development of satellite launch
            vehicles and sounding rockets. It focuses on aerospace engineering,
            propulsion systems, and payload integration.
          </p>
        </div>

        {/* LPSC */}
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">
            Liquid Propulsion Systems Centre (LPSC)
          </h3>
          <p className="mt-1">Valiamala, Kerala, India</p>
          <p className="mt-2 text-gray-700">
            LPSC is responsible for the design, development, and testing of
            liquid propulsion systems used in launch vehicles and spacecraft. It
            plays a key role in the cryogenic engine technology.
          </p>
        </div>

        {/* SDSC SHAR */}
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">
            Satish Dhawan Space Centre (SDSC) SHAR
          </h3>
          <p className="mt-1">Sriharikota, Andhra Pradesh, India</p>
          <p className="mt-2 text-gray-700">
            SDSC SHAR is ISRO's primary launch center, responsible for
            integrating and launching satellites into orbit. It houses launch
            pads and testing facilities for PSLV, GSLV, and future rockets.
          </p>
        </div>

        {/* NRSC */}
        <div className="bg-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">
            National Remote Sensing Centre (NRSC)
          </h3>
          <p className="mt-1">Balanagar, Hyderabad, Telangana, India</p>
          <p className="mt-2 text-gray-700">
            NRSC manages remote sensing applications, data processing, and
            satellite imagery analysis. It supports disaster management,
            agriculture, and environmental monitoring programs.
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl mt-10">
        <h2 className="text-3xl font-semibold text-center">Follow Us</h2>
        <div className="flex justify-center gap-8 mt-6">
          <Link href="https://www.facebook.com/ISRO" passHref legacyBehavior>
            <a>
              <FaFacebook className="text-black text-3xl" />
            </a>
          </Link>
          <Link href="https://twitter.com/isro" passHref legacyBehavior>
            <a>
              <FaTwitter className="text-black text-3xl" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/isro" passHref legacyBehavior>
            <a>
              <FaInstagram className="text-black text-3xl" />
            </a>
          </Link>
          <Link
            href="https://www.youtube.com/user/ISRO"
            passHref
            legacyBehavior
          >
            <a>
              <FaYoutube className="text-black text-3xl" />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/company/isro"
            passHref
            legacyBehavior
          >
            <a>
              <FaLinkedin className="text-black text-3xl" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
