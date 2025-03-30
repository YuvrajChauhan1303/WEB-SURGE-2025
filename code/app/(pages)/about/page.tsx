import React from "react";
import Image from "next/image";

function Page() {
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

      {/* About ISRO Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold border-l-4 border-blue-500 pl-4">
            About ISRO
          </h1>
          <p className="text-lg mt-4 leading-relaxed">
            The Indian Space Research Organization (ISRO) is India’s national
            space agency, established in 1969. Over the decades, ISRO has
            significantly advanced satellite development, planetary research,
            and space-based applications, making India a leading player in the
            global space industry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold border-l-4 border-red-500 pl-4">
            Our Mission
          </h1>
          <p className="text-lg mt-4 leading-relaxed">
            ISRO is dedicated to harnessing space technology for the benefit of
            society. Its mission includes expanding scientific research,
            ensuring technological advancements, and strengthening India’s
            capabilities in space exploration.
          </p>
        </div>
      </section>

      {/* Achievements Section (Cards with Images and Descriptions) */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold border-l-4 border-green-500 pl-4">
            Notable Achievements
          </h1>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chandrayaan-3 Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/chandrayaan.png"
                alt="Chandrayaan-3 Mission"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">Chandrayaan-3</h2>
              <p className="text-lg mt-2 leading-relaxed">
                Launched in July 2023, Chandrayaan-3 achieved a successful soft
                landing near the Moon's south pole on August 23, 2023. This
                mission demonstrated India's capability in lunar exploration and
                included a lander and rover to conduct scientific experiments on
                the lunar surface.
              </p>
            </div>

            {/* Mangalyaan Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/mangalyaan.png"
                alt="Mangalyaan Mission"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">Mangalyaan</h2>
              <p className="text-lg mt-2 leading-relaxed">
                Also known as the Mars Orbiter Mission (MOM), Mangalyaan was
                launched on November 5, 2013, and successfully entered Mars
                orbit on September 23, 2014. This mission made India the first
                Asian nation to reach Mars orbit and the first globally to do so
                on its maiden attempt.
              </p>
            </div>

            {/* PSLV-C37 Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/pslv-c37.jpg"
                alt="PSLV-C37 Mission"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">PSLV-C37</h2>
              <p className="text-lg mt-2 leading-relaxed">
                On February 15, 2017, ISRO's Polar Satellite Launch Vehicle
                (PSLV-C37) set a world record by successfully launching 104
                satellites in a single mission. This remarkable achievement
                showcased ISRO's prowess in satellite deployment and space
                mission management.
              </p>
            </div>

            {/* NavIC Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/images/navic.jpg"
                alt="NavIC System"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">NavIC</h2>
              <p className="text-lg mt-2 leading-relaxed">
                The Navigation with Indian Constellation (NavIC) is India's
                autonomous satellite navigation system, providing accurate
                position information services to users in India and the
                surrounding region. It enhances India's capability in navigation
                and positioning applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold border-l-4 border-purple-500 pl-4">
            Future Goals
          </h1>
          <p className="text-lg mt-4 leading-relaxed">
            ISRO is working on ambitious projects like{" "}
            <span className="font-semibold">Gaganyaan</span> (India's first
            crewed spaceflight), interplanetary missions, and advanced satellite
            technologies for global connectivity.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
