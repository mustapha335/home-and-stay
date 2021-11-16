import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-y-10 px-24 py-14 bg-gray-100 mt-5 text-center">
      <div className=" space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold text-center">ABOUT</h5>
        <p className="cursor-pointer">How Home&Stay works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Home&Stay Plus</p>
        <p className="cursor-pointer">Home&Stay Luxe</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">This is not a real site</p>
        <p className="cursor-pointer">It's a pretty awesome clone</p>
        <p className="cursor-pointer">Referrals accepted</p>
        <p>Join</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Home&Stay</p>
        <p>Presents</p>
        <p>Investors</p>
        <p>Home&Stay Plus</p>
        <p>Join Now</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Newsroom</p>
        <p>Easter Eggs</p>
        <p>FAQ</p>
        <p>Home&Stay Luxe</p>
      </div>
    </div>
  );
};

export default Footer;
