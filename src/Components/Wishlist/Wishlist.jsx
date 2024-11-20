import { useLoaderData } from "react-router-dom";
import { addCart, getAllWish } from "../../utilities/localStorage";
import { useEffect, useState } from "react";

const Wishlist = ({ card, handleRemoveWish }) => {
  const {
    id,
    title,
    img,
    category,
    price,
    description,
    specs,
    availability,
    rating,
  } = card;

  const handleCart = (card) => {
    addCart(card);
    handleRemoveWish(id);
  };

  return (
    <div className="mt-4">
      <div className="card bg-white flex-row items-center border-2 border-[#1313131A] p-6">
        <figure className="w-1/2 md:w-1/5">
          <img src={img} alt="Shoes" className="rounded-xl max-h-28" />
        </figure>
        <div className="card-body p-0 items-start justify-center ml-6 text-start">
          <h2 className="text-xl font-semibold text-[#131313]/80">{title}</h2>
          <p className="text-md font-medium text-[#131313]/50">{description}</p>
          <p className="text-lg text-black/60 text-start font-bold">
            Price: ${price}
          </p>
          <button
            onClick={() => handleCart(card)}
            className="btn flex-nowrap rounded-full btn-outline text-md text-white font-bold bg-[#9538E2] border-none"
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
