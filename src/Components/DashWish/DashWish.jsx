import React, { useEffect, useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import { getAllWish } from "../../utilities/localStorage";

const DashWish = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const cart = getAllWish();
    setProduct(cart);
  }, []);

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
        product.map((card) => <Wishlist key={card.id} card={card}></Wishlist>)
      ) : (
        <div className="flex justify-center items-center text-xl font-bold text-gray-500">
          <p>Empty</p>
        </div>
      )}
    </div>
  );
};

export default DashWish;
