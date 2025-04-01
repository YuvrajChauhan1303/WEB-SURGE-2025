import React from "react";
import Link from "next/link";
import Image from "next/image";

function CareersPage() {
  const jobOpenings = [
    {
      title: "Scientist - Mechanical",
      location: "ISRO HQ, Bangalore",
      eligibility: "B.E/B.Tech in Mechanical Engineering with 65% marks",
      link: "#apply-scientist-mech",
    },
    {
      title: "Engineer - Electronics",
      location: "VSSC, Thiruvananthapuram",
      eligibility: "B.E/B.Tech in Electronics Engineering with 65% marks",
      link: "#apply-scientist-elec",
    },
    {
      title: "Software Engineer",
      location: "SAC, Ahmedabad",
      eligibility: "B.E/B.Tech in Computer Science with 65% marks",
      link: "#apply-software-eng",
    },
    {
      title: "Technical Assistant - Electrical",
      location: "SDSC SHAR, Sriharikota",
      eligibility: "Diploma in Electrical Engineering with 60% marks",
      link: "#apply-tech-assistant",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Title Section */}
      <div
        className="text-center py-16 bg-gray-200 w-full"
        style={{ fontFamily: "teko" }}
      >
        <h1 className="text-5xl font-bold tracking-wide">Careers at ISRO</h1>
        <h2 className="text-3xl font-semibold mt-4">
          Explore Opportunities to Work with India&apos;s Space Agency
        </h2>
      </div>
      <div className="w-screen h-[40vh] overflow-hidden">
        <Image
          src="/images/isro.jpg"
          alt="ISRO Banner"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Job Openings Section */}
      <div className="w-full max-w-6xl p-8">
        <h2
          className="text-4xl font-bold text-left"
          style={{ fontFamily: "fsp" }}
        >
          Current Job Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-300 "
            >
              <h3
                className="text-2xl font-semibold"
                style={{ fontFamily: "fsp" }}
              >
                {" "}
                {job.title}
              </h3>
              <p className="mt-2 font-medium">Location: {job.location}</p>
              <p className="mt-1 text-gray-700">
                <span className="font-semibold">Eligibility:</span>{" "}
                {job.eligibility}
              </p>
              <Link href={job.link}>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Internships and Fellowships Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8 mt-10">
        {/* Internships Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-300 ">
          <h2
            className="text-3xl font-semibold text-left"
            style={{ fontFamily: "fsp" }}
          >
            Internship Opportunities
          </h2>
          <p className="text-lg mt-4 text-left" style={{ fontFamily: "inter" }}>
            ISRO offers internships for undergraduate and postgraduate students
            in various disciplines such as Aerospace, Mechanical, Computer
            Science, and Electronics.
          </p>
          <p className="text-lg mt-2 text-left" style={{ fontFamily: "inter" }}>
            <span className="font-semibold">Eligibility:</span> Must be in the
            final or pre-final year of study. Applicants must have a strong
            academic record.
          </p>
          <p className="text-lg mt-2 text-left" style={{ fontFamily: "inter" }}>
            <span className="font-semibold">Duration</span>: Internships are
            available for short-term (6-8 weeks) and long-term (3-6 months)
            projects.
          </p>
          <div className="flex justify-start mt-6">
            <Link href="#apply-internship" style={{ fontFamily: "inter" }}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Apply for Internship
              </button>
            </Link>
          </div>
        </div>

        {/* Fellowships Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-300 ">
          <h2
            className="text-3xl font-semibold text-left"
            style={{ fontFamily: "fsp" }}
          >
            Fellowship Programs
          </h2>
          <p className="text-lg mt-4 text-left" style={{ fontFamily: "inter" }}>
            ISRO offers research fellowships for Ph.D. and postdoctoral
            candidates in space technology and applications.
          </p>
          <p className="text-lg mt-2 text-left" style={{ fontFamily: "inter" }}>
            <span className="font-semibold">Eligibility:</span> Candidates must
            have a strong research background and relevant qualifications in
            space-related fields.
          </p>
          <p className="text-lg mt-2 text-left" style={{ fontFamily: "inter" }}>
            <span className="font-semibold">Duration</span>: Fellowships
            typically range from 1 to 3 years, depending on the research
            proposal.
          </p>
          <div className="flex justify-start mt-6">
            <Link href="#apply-fellowship" style={{ fontFamily: "inter" }}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Apply for Fellowship
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl mt-10 mb-10">
        <h2
          className="text-3xl font-semibold text-left"
          style={{ fontFamily: "fsp" }}
        >
          Contact Careers Department
        </h2>
        <p className="text-lg mt-4 text-left" style={{ fontFamily: "inter" }}>
          For any queries regarding careers, recruitment, and internships,
          contact us at:
        </p>
        <p
          className="text-lg text-left font-medium mt-2"
          style={{ fontFamily: "inter" }}
        >
          Email: careers@isro.gov.in
        </p>
        <p
          className="text-lg text-left font-medium"
          style={{ fontFamily: "inter" }}
        >
          Phone: +91-80-22172294
        </p>
      </div>
    </div>
  );
}

export default CareersPage;
