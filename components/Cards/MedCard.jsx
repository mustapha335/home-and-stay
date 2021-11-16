import React from "react";
import Image from "next/image";

const MedCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer transform transition duration-300 ease-out hover:scale-105 ">
      <div className="relative h-80 w-80">
        <Image className="rounded-lg  " src={img} layout="fill" alt="" />
      </div>
      <h3 className="text-2xl font-semibold mt-3">{title}</h3>
    </div>
  );
};

export default MedCard;
