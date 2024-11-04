import React, { useEffect, useState } from "react";
import Vr from "../../assets/banner.jpg";
import Card from "../Card/Card";

const Home = () => {
  const [allCard, setAllCard] = useState([]);

  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  console.log(allCard);

  return (
    <div className="container mx-auto px-14">
      <div className="flex items-center justify-center -translate-y-3/4 md:-translate-y-[40%] lg:-translate-y-1/4">
        <img
          src={Vr}
          alt=""
          className="w-4/5 rounded-2xl outline outline-offset-[16px] outline-white ring-[16px] ring-white/30 "
        />
      </div>
      <h1 className="text-4xl text-center font-bold text-black mb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-6 flex-col lg:flex-row ">
        <div className="w-full lg:w-1/4 lg:h-min py-4 px-2 lg:px-0 rounded-2xl bg-white gap-4 flex flex-wrap flex-row lg:flex-col justify-center items-center">
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            All Poducts
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Default
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-3/4">
          {allCard.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
