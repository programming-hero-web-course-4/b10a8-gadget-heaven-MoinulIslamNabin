import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { addCart, addWish, getAllWish } from "../../utilities/localStorage";


const DetailsHome = () => {
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);
  
  

  useEffect(() => {
    const wish = getAllWish();
    const isExist = wish.find(product => product.id == item.id)
    if (isExist) {
      setIsWished(true)
    }
    const handleOutsideClick = (event) => {
      if (!ratingRef.current.contains(event.target)) {
        setRating(0);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const item = useLoaderData();

  const [isWished, setIsWished] = useState(false)

  const handleCart = item => {
    addCart(item)
  }
  const handleWish = item => {
    addWish(item)
    setIsWished(true)
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center -translate-y-[3%] md:-translate-y-[5%]">
        <div className="hero justify-start bg-white w-3/4  ring-[16px] ring-white  rounded-2xl">
          <div className="">
            <div className="card bg-white flex-col lg:flex-row items-center p-6">
              <figure className="w-1/2 md:w-1/3">
                <img src={item.img} alt="Shoes" className="rounded-xl " />
              </figure>
              <div className="card-body p-0 items-start justify-center mt-8 lg:mt-0 lg:ml-6 text-start">
                <h2 className="text-2xl font-semibold text-[#131313]/80">
                  {item.title}
                </h2>
                <p className="text-xl text-black/60 text-start font-bold">
                  Price: $ {item.price}
                </p>
                <div className="badge bg-green-400/30 text-green-600 font-bold border-2 border-green-600">
                  {item.availability ? "In Stock" : "Out of Stock"}
                </div>
                <p className="text-lg font-medium text-[#131313]/50">
                  {item.description}
                </p>
                <p className="text-xl font-bold my-2">Specification:</p>
                <ol style={{ listStyleType: "decimal", paddingLeft: "20px" }}>
                  {item.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="text-start text-lg opacity-60 font-normal"
                    >
                      {spec}
                    </li>
                  ))}
                </ol>
                <p className="text-xl font-bold mt-2">Rating:</p>
                <div className="flex gap-3">
                  <Rating
                    style={{ maxWidth: 120 }}
                    ref={ratingRef}
                    value={rating}
                    onChange={setRating}
                  />
                  <div className="mt-1 py-2 px-4 rounded-3xl bg-slate-100 opacity-75 font-bold border-none">
                    {item.rating}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={()=>handleCart(item)} className="btn rounded-full btn-outline text-md text-white font-bold bg-[#9538E2] border-none">
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
                  <button disabled={isWished} onClick={()=> handleWish(item)} className="btn btn-ghost bg-white outline outline-1 outline-black/20 btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHome;
