import React, { useEffect, useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import { getAllWish, removeWish } from "../../utilities/localStorage";

const DashWish = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const wish = getAllWish();
    setProduct(wish);
  }, []);

  const handleRemoveWish = (id) => {
    removeWish(id)
    const wish = getAllWish();
    setProduct(wish);
  }

  return (
    <div className="container mx-auto mt-8 lg:px-12 px-3">
      <div className="navbar justify-between mb-4 pt-4">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl text-black/80 font-bold">
            Wishlist
          </a>
        </div>
      </div>

      {Array.isArray(product) && product.length !== 0 ? (
        product.map((card) => <Wishlist handleRemoveWish={handleRemoveWish} key={card.id} card={card}></Wishlist>)
      ) : (
        <div className="flex justify-center items-center text-xl font-bold text-gray-500">
          <p>Empty</p>
        </div>
      )}
    </div>
  );
};

export default DashWish;
