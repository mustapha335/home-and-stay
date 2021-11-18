import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10   ">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative flex items-center h-10 cursor-pointer my-auto  "
      >
        <h1 className=" hidden md:inline-flex xl:inline-flex  text-4xl text-center font-bold text-red-400  ">
          Home&Stay
        </h1>
      </div>

      <div className="flex item-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-grey-600 placeholder-gray-400 "
          type="text"
          placeholder={placeholder || "Search..."}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#f87171"]}
            onChange={handleChange}
          />
          <div className=" flex items-center border-b mb-4">
            <h2 className=" text-2xl flex-grow font-semibold mt-2 ">
              Number Of Guests:
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
