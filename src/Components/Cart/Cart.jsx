import React from "react";

const Cart = () => {
  return (
    <div className="mt-4">
      <div className="card bg-white flex-row items-center border-2 border-[#1313131A] p-6">
        <figure className="w-1/2 md:w-1/5">
          <img src="https://i.ibb.co.com/2sMwLkc/64cbe8eefef57507687a179a-jbl-tune-125-true-wireless-headphones.jpg" alt="Shoes" className="rounded-xl max-h-28" />
        </figure>
        <div className="card-body p-0 items-start justify-center ml-6 text-center">
          <h2 className="text-2xl font-semibold text-[#131313]/80">Shoes</h2>
          <p className="text-lg font-medium text-[#131313]/50">description</p>
          <p className="text-xl text-black/60 text-start font-bold">
            Price: 999.99
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
