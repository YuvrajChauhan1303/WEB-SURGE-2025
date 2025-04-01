"use client";
import React from "react";
import Image from "next/image";

const CurrentLeads = () => {
  const currentLeads = [
    {
      name: "Dr. S. Somanath",
      position: "Chairman, ISRO",
      imgSrc: "/images/s_somnath.png",
      description: (
        <p className="text-neutral-800 text-xl font-normal">
          As the current chairman of ISRO, Dr. Somanath is leading India&apos;s
          space programs, including Chandrayaan-3, Gaganyaan, and deep-space
          missions.
        </p>
      ),
    },
    {
      name: "Dr. Unnikrishnan Nair",
      position: "Director, Vikram Sarabhai Space Centre (VSSC)",
      imgSrc: "/images/UNN.png",
      description: (
        <p className="text-neutral-800 text-xl font-normal">
          Heading VSSC, he is responsible for launch vehicle developments and
          key space exploration projects.
        </p>
      ),
    },
    {
      name: "Dr. Nilesh Desai",
      position: "Director, Space Applications Centre (SAC)",
      imgSrc: "/images/nilesh-desai.png",
      description: (
        <p className="text-neutral-800 text-xl font-normal">
          Leading research in satellite communications, remote sensing, and
          space applications for national development.
        </p>
      ),
    },
    {
      name: "Dr. P. Kunhikrishnan",
      position: "Director, UR Rao Satellite Centre (URSC)",
      imgSrc: "/images/PNN.png",
      description: (
        <p className="text-neutral-800 text-xl font-normal">
          Supervising satellite development, ensuring advancements in space
          technology for India&apos;s missions.
        </p>
      ),
    },
  ];
  return (
    <div className="w-full bg-white font-sans md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-neutral-700 mb-10">
          ISRO Current Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {currentLeads.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-300"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={leader.imgSrc}
                  alt={leader.name}
                  width={600} // Adjust this width as necessary
                  height={400} // Adjust this height as necessary
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Position */}
              <h3
                className="text-2xl font-bold text-neutral-700 mt-4"
                style={{ fontFamily: "fsp" }}
              >
                {leader.name}
              </h3>
              <h4
                className="text-lg text-gray-500"
                style={{ fontFamily: "fsp" }}
              >
                {leader.position}
              </h4>

              {/* Description */}
              <div className="mt-2">{leader.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentLeads;
