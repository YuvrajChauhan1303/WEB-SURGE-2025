import React from "react";
// import Image from "next/image";
import { Timeline } from "@/components/timeline";

function Page() {
  const data = [
    {
      title: "1969 - Formation of ISRO",
      imgSrc: "/images/1962.jpg", // Update with actual image path
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          The Indian Space Research Organisation (ISRO) was established under
          the leadership of Vikram Sarabhai.
        </p>
      ),
    },
    {
      title: "1975 - First Indian Satellite (Aryabhata)",
      imgSrc: "/images/1975.jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          ISRO launched its first satellite, Aryabhata, using a Soviet launch
          vehicle.
        </p>
      ),
    },
    {
      title: "1980 - First Indigenous Satellite Launch",
      imgSrc: "/images/1980.jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          Rohini satellite was successfully placed in orbit using the indigenous
          SLV-3 rocket.
        </p>
      ),
    },
    {
      title: "2008 - Chandrayaan-1",
      imgSrc: "/images/2008.jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          India&apos;s first lunar probe confirmed the presence of water
          molecules on the Moon.
        </p>
      ),
    },
    {
      title: "2014 - Mars Orbiter Mission (Mangalyaan)",
      imgSrc: "/images/2014.jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          India became the first country to reach Mars on its first attempt, at
          a record-low budget.
        </p>
      ),
    },
    {
      title: "2019 - Chandrayaan-2",
      imgSrc: "/images/2019.jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          The mission aimed for a soft landing on the Moon but partially
          succeeded with the orbiter continuing operations.
        </p>
      ),
    },
    {
      title: "2023 - Chandrayaan-3",
      imgSrc: "/images/jpg",
      content: (
        <p className="text-neutral-800 text-xl font-normal">
          India successfully landed a rover on the lunar surface, making it the
          fourth nation to do so.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Title Section */}
      <div
        className="text-center py-16 bg-gray-200 shadow-md"
        style={{ fontFamily: "teko" }}
      >
        <h1 className="text-5xl font-bold tracking-wide">
          Department of Space
        </h1>
        <h2 className="text-6xl font-semibold">
          Indian Space Research Organization
        </h2>
      </div>
      {/* Timeline Section */}
      <div className="container mx-auto py-12 px-6">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default Page;
