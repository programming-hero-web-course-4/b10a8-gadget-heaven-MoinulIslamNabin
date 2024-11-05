import React, { useEffect, useState } from "react";
import Vr from "../../assets/banner.jpg";
import "./Home.css";
import { useNavigation } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";
import Laptop from "../Laptop/Laptop";
import Phone from "../Phone/Phone";
import Accessories from "../Accessories/Accessories";
import SmartWatch from "../SmartWatch/SmartWatch";
import MacBook from "../MacBook/MacBook";
import Iphone from "../Iphone/Iphone";

const Home = () => {
  const navigation = useNavigation();

  const [isActive, setIsActive] = useState("all");

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
          <button
            onClick={() => setIsActive("all")}
            className={
              isActive == "all"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            All Poducts
          </button>
          <button
            onClick={() => setIsActive("Phones")}
            className={
              isActive == "Phones"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            Phones
          </button>
          <button
            onClick={() => setIsActive("Laptops")}
            className={
              isActive == "Laptops"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            Laptops
          </button>
          <button
            onClick={() => setIsActive("Accessories")}
            className={
              isActive == "Accessories"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            Accessories
          </button>
          <button
            onClick={() => setIsActive("SmartWatches")}
            className={
              isActive == "SmartWatches"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            Smart Watches
          </button>
          <button
            onClick={() => setIsActive("MacBooks")}
            className={
              isActive == "MacBooks"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            MacBooks
          </button>
          <button
            onClick={() => setIsActive("Iphones")}
            className={
              isActive == "Iphones"
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            Iphones
          </button>
          <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
            <span class="flex w-full bg-gray-900 text-white rounded p-2">
              Gradient border
            </span>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-3/4">
          {isActive == "all" && <AllProduct></AllProduct>}
          {isActive == "Laptops" && <Laptop></Laptop>}
          {isActive == "Phones" && <Phone></Phone>}
          {isActive == "Accessories" && <Accessories></Accessories>}
          {isActive == "SmartWatches" && <SmartWatch></SmartWatch>}
          {isActive == "MacBooks" && <MacBook></MacBook>}
          {isActive == "Iphones" && <Iphone></Iphone>}
        </div>
      </div>
    </div>
  );
};

export default Home;
