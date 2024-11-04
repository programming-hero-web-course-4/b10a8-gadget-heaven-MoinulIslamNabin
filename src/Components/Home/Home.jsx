import React, { useEffect, useState } from "react";
import Vr from "../../assets/banner.jpg";
import Card from "../Card/Card";
import "./Home.css";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();

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
      <h1 id="home" className="text-4xl text-center font-bold text-black mb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex gap-6 flex-col lg:flex-row ">
        <div className="w-full lg:w-1/4 lg:h-min py-4 px-2 lg:px-0 rounded-2xl bg-white gap-4 flex flex-wrap flex-row lg:flex-col justify-center items-center">
          <button className="active-btn btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            All Poducts
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Laptops
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Phones
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Accessories
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Smart Watches
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            MacBooks
          </button>
          <button className="btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60">
            Iphones
          </button>
          <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
            <span class="flex w-full bg-gray-900 text-white rounded p-2">
              Gradient border
            </span>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-3/4">
          {allCard.map((card) =>
            navigation.state === "loading" ? (
              <Skeleton key={card.id}></Skeleton>
            ) : (
              <Card key={card.id} card={card}></Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
