import React from "react";
import { useNavigate } from "react-router-dom";

const DetailsBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#9538E2] mt-10 pb-10">
      <div className="container py-10 hero-content max-w-full text-center">
        <div className="w-10/12 flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Details</h1>
          <p className="w-11/12 md:w-8/12 text-center text-base text-white font-normal">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn rounded-full text-[#9538E2] font-extrabold"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
