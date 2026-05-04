import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">

      {/* Logo */}
      <div className="text-4xl font-bold">
        <span>BR.</span>
        <span className="text-gray-400">F</span>
      </div>

      <div className="h-[45px] w-[370px] bg-gray-200 rounded-md flex items-center gap-4 p-2">
        <i className="ri-search-line text-2xl text-gray-500"></i>
        <p className="text-gray-500 text-xl">Search</p>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">

        <div className="flex flex-col items-center cursor-pointer">
          <i className="ri-shopping-bag-3-line text-2xl"></i>
          <p className="text-sm ">Cart</p>
        </div>


        <div className="flex flex-col items-center cursor-pointer">
          <i className="ri-heart-line text-2xl"></i>
          <p className="text-sm">Favorites</p>
        </div>

        <div className="bg-gray-700 h-[50px] w-[50px] rounded-full ml-1"></div>

        </div>
    </div>
  );
};

export default Navbar;
