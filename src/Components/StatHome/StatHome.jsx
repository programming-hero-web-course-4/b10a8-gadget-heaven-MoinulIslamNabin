import React from "react";
import StatChart from "../StatChart/StatChart";

const StatHome = () => {
  return (
    <>
    <div className="container mx-auto mt-8 lg:px-12 px-3">
      <div className="navbar justify-between mb-4 pt-4">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl text-black/80 font-bold">
            Wishlist
          </a>
        </div>
      </div>
    </div>
      
    

      <div className="mt-8 md:px-4 lg:px-6 py-8 lg:py-16 rounded-2xl bg-white container w-11/12 mx-auto">
        <StatChart></StatChart>
      </div>
    </>
  );
};

export default StatHome;
