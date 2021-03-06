import React from "react";
import Image from "next/image";

const banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[500px]  lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
      <Image
        className=""
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1609260843286-9d8ad4f7e72c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
        className=" "
      /> */}
      <div className="absolute text-center top-1/2 w-full ">
        <p className="text-sm sm:text-lg ">Not sure where to go? Perfect .</p>
        <button className="bg-white px-10 py-4 rounded-full text-purple-500 shadow-md font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default banner;
