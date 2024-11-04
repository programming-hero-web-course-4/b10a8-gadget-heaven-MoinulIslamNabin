import React from "react";
import ReactiveButton from "reactive-button";

const Banner = () => {
  return (

      <div className="hero bg-[#9538E2] rounded-2xl pb-52">
        <div className="hero-content max-w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-7">
            <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="w-8/12 text-center text-base text-white font-normal">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <ReactiveButton 
                rounded 
                idleText={'Shop Now'}
                size="large"
                style={{
                    backgroundColor: 'white',
                    color: '#9538E2',
                    fontWeight: 700,
                  }}
                  onClick={() => window.location.href = '#home'}
                />
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
