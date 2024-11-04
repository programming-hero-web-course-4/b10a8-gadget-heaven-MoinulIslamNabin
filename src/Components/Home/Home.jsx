import React from "react";
import Vr from "../../assets/banner.jpg";
import ReactiveButton from "reactive-button";

const Home = () => {
  return (
    <div className="container mx-auto px-14">
      <div className="flex items-center justify-center -translate-y-3/4 md:-translate-y-[40%] lg:-translate-y-1/4">
        <img
          src={Vr}
          alt=""
          className="w-4/5 rounded-2xl outline outline-offset-[16px] outline-white ring-[16px] ring-white/30 "
        />
      </div>
        <h1 className="text-4xl text-center font-bold text-black">Explore Cutting-Edge Gadgets</h1>
        <div className="flex gap-6 lg:felx-row flex-col">
            <div className="bg-white flex flex-row lg:flex-col gap-4 justify-center">
                
            </div>
        </div>
    </div>
  );
};

export default Home;
