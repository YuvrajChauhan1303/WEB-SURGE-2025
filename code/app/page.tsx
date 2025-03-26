import LandingCard from "@/components/LandingCard";
import Image from "next/image";

export default function Home() {
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
          <div className="absolute inset-0 flex justify-center items-center">
            <span
              className="text-[220px] text-white tracking-[.15em] bg-black/10 px-96 py-48"
              style={{ fontFamily: "teko" }}
            >
              ISRO
            </span>
          </div>
        </div>
      </div>

      <div className="z-2 relative mt-[-60px]">
        <div className="flex w-screen justify-center gap-8">
          <LandingCard number="12,752" text="Distance in Km" />
          <LandingCard number="18" text="Satellites Released" />
          <LandingCard number="130" text="Successful Launches" />
          <LandingCard number="100" text="Launch Missions" />
          <LandingCard number="9" text="Re Entry Missions" />
        </div>
      </div>
    </div>
  );
}
