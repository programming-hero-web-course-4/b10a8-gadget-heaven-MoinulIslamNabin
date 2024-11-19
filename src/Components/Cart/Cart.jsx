import React from "react";
import { useLoaderData } from "react-router-dom";

const Cart = ({card}) => {

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

  return (
    <div className="mt-4">
      <div className="card bg-white flex-row items-center border-2 border-[#1313131A] p-6">
        <figure className="w-1/2 md:w-1/5">
          <img src={img} alt="Shoes" className="rounded-xl max-h-28" />
        </figure>
        <div className="card-body p-0 items-start justify-center ml-6 text-start">
          <h2 className="text-xl font-semibold text-[#131313]/80">{title}</h2>
          <p className="text-md font-medium text-[#131313]/50">{description}</p>
          <p className="text-lg text-black/60 font-bold">
            Price: ${price}
          </p>
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="btn bg-transparent border-0 rounded-badge shadow-none"
        >
          <img src="https://i.ibb.co.com/9ZvxFyb/delete.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
