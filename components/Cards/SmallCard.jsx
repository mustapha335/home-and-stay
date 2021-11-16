import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 hover:bg-gray-100 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-in-out ">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image className="rounded-lg" src={img} alt="" layout="fill" />
      </div>

      {/* right  */}
      <div className="bg">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
