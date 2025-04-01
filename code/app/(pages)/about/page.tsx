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
          <h1
            className="text-3xl font-semibold border-l-4 border-blue-500 pl-4"
            style={{ fontFamily: "fsp" }}
          >
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
          <h1
            className="text-3xl font-semibold border-l-4 border-red-500 pl-4"
            style={{ fontFamily: "fsp" }}
          >
            Our Mission
          </h1>
          <p
            className="text-lg mt-4 leading-relaxed"
            style={{ fontFamily: "inter" }}
          >
            ISRO is dedicated to harnessing space technology for the benefit of
            society. Its mission includes expanding scientific research,
            ensuring technological advancements, and strengthening India&apso;s
            capabilities in space exploration.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-3xl font-semibold border-l-4 border-green-500 pl-4"
            style={{ fontFamily: "fsp" }}
          >
            Notable Achievements
          </h1>
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            {/* Achievement Cards */}
            {[
              { src: "/images/chandrayaan.png", title: "Chandrayaan-3" },
              { src: "/images/mangalyaan.png", title: "Mangalyaan" },
              { src: "/images/gaganyaan.png", title: "Gaganyaan" },
              { src: "/images/pslv.png", title: "PSLV Successes" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="w-[400px] h-[400px] overflow-hidden rounded-[24px] bg-gray-200 relative group"
              >
                <Image
                  src={achievement.src}
                  alt={achievement.title}
                  fill
                  className="transition-transform duration-500 ease-in-out hover:scale-110 object-contain group-hover:blur-md"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div
                  className="absolute bottom-4 left-4 text-black text-3xl font-semibold opacity-0 translate-y-4 tracking-wide transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ fontFamily: "teko" }}
                >
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-3xl font-semibold border-l-4 border-purple-500 pl-4"
            style={{ fontFamily: "fsp" }}
          >
            Future Goals
          </h1>
          <p
            className="text-lg mt-4 leading-relaxed"
            style={{ fontFamily: "inter" }}
          >
            ISRO is working on ambitious projects like{" "}
            <span className="font-semibold">Gaganyaan</span> (India&apos;s first
            crewed spaceflight), interplanetary missions, and advanced satellite
            technologies for global connectivity.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
