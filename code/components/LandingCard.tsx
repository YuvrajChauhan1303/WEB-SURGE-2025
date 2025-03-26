import React from "react";

interface LandingCardProps {
  number: string;
  text: string;
}

const LandingCard = ({ number, text }: LandingCardProps) => {
  return (
    <div
      className="border border-yellow-400 rounded-xl h-[120px] w-[160px] flex flex-col justify-center items-center bg-black/30 text-white shadow-md gap-2 backdrop-blur-xs"
      style={{ fontFamily: "fsp" }}
    >
      <h1 className="text-4xl font-bold tracking-wide underline">{number}</h1>
      <h2 className="text-sm font-semibold w-[40%] text-center uppercase">
        {text}
      </h2>
    </div>
  );
};

export default LandingCard;
