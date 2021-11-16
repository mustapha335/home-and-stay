import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const header = () => {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 hover:bg-gradient-to-b from-gray-300 ">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* //this is the writing because we are using it as a logo so see if you can
        use css to style it <div>Home&Stay</div> */}
        {/* <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
        <h1 className="text-4xl text-center font-bold text-red-400">
          Home&Stay
        </h1>
      </div>

      <div className="flex item-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-grey-600 placeholder-gray-400 "
          type="text"
          placeholder="Search..."
        />

        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white mx-3 md:mx-2" />
      </div>

      <div className="flex justify-end space-x-4  text-grey-550 items-center">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex rounded-full p-2 border-2 space-x-2 items-center">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default header;
