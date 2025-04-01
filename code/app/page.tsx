"use client";
import LandingCard from "@/components/LandingCard";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { animateLandingPage } from "@/animations/landing"; // Import the animation function

export default function Home() {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);
  const cardRef4 = useRef<HTMLDivElement>(null);
  const cardRef5 = useRef<HTMLDivElement>(null);
  const landingText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (landingText) {
      animateLandingPage(landingText, [
        cardRef1,
        cardRef2,
        cardRef3,
        cardRef4,
        cardRef5,
      ]);
    }
  }, []);

  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg.png"
          width={1920}
          height={1080}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="backdrop-blur-[2px] w-screen h-screen fixed z-1"></div>

      <div className="z-2 relative w-screen flex justify-center items-center">
        <div className="relative">
          <Image
            src="/images/globe.png"
            width={575}
            height={575}
            alt="globe"
            className="-translate-x-[6%]"
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
            ref={landingText} // Assign the ref
          >
            <span
              className="text-[220px] text-white tracking-[.15em] bg-black/20 px-96 py-48"
              style={{ fontFamily: "teko" }}
            >
              ISRO
            </span>
          </div>
        </div>
      </div>

      <div className="z-3 relative -top-16">
        <div className="flex w-screen justify-center gap-8">
          <LandingCard number="12,752" text="Distance in Km" ref={cardRef1} />
          <LandingCard number="18" text="Satellites Released" ref={cardRef2} />
          <LandingCard number="130" text="Successful Launches" ref={cardRef3} />
          <LandingCard number="100" text="Launch Missions" ref={cardRef4} />
          <LandingCard number="9" text="Re Entry Missions" ref={cardRef5} />
        </div>
      </div>
    </div>
  );
}
