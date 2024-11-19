import React from "react";
import DashCart from "../DashCart/DashCart";

import { useState } from "react";
import DashWish from "../DashWish/DashWish";

const Dashboard = () => {
  const [isActive, setIsActive] = useState("cart");
  return (
    <>
      <div className="bg-[#9538E2] mt-10">
        <div className="container py-10 hero-content max-w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="w-11/12 md:w-8/12 text-center text-base text-white font-normal mb-4">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setIsActive("cart")}
                className={
                  isActive == "cart"
                    ? "btn rounded-full w-1/2 text-[#9538E2] font-extrabold"
                    : "btn rounded-full bg-transparent w-1/2 border-2 hover:text-[#9538E2] text-white font-extrabold "
                }
              >
                Cart
              </button>
              <button
                onClick={() => setIsActive("wishlist")}
                className={
                  isActive == "wishlist"
                    ? "btn rounded-full w-1/2 text-[#9538E2] font-extrabold"
                    : "btn rounded-full bg-transparent w-1/2 border-2 hover:text-[#9538E2] text-white font-extrabold "
                }
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {isActive == 'cart' && <DashCart></DashCart>}
      {isActive == 'wishlist' && <DashWish></DashWish>}
    </>
  );
};

export default Dashboard;
