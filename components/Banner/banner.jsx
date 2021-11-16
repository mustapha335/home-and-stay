import React from "react";
import Image from "next/image";

const banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px]  lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
      {/* <Image
        className=""
        src="https://images.unsplash.com/photo-1636920170547-230f614781b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        layout="fill"
        objectFit="cover"
      /> */}
      <img
        src="https://images.unsplash.com/photo-1620938729373-ca137d8bdfcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
        alt=""
        className="h-[50rem] w-[100%] items-center"
      />
      <div className="absolute text-center top-1/2 w-full ">
        <p className="text-sm sm:text-lg text-white">
          Not sure where to go? Perfect .
        </p>
        <button className="bg-white px-10 py-4 rounded-full text-purple-500 shadow-md font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default banner;
