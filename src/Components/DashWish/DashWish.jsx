import React from "react";
import Wishlist from "../Wishlist/Wishlist";

const DashWish = () => {
  return (
    <div className="container mx-auto mt-8 lg:px-12 px-3">
      <div className="navbar justify-between mb-4 pt-4">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl text-black/80 font-bold">Wishlist</a>
        </div>
      </div>

      <Wishlist></Wishlist>
      <Wishlist></Wishlist>
      <Wishlist></Wishlist>
      <Wishlist></Wishlist>
    </div>
  );
};

export default DashWish;
