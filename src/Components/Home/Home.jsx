import React, { useEffect, useState } from "react";
import Vr from "../../assets/banner.jpg";
import "./Home.css";
import { Link, Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();

  const [isActive, setIsActive] = useState("all");

  const [allCard, setAllCard] = useState([]);

  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

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
          <Link to={"/"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/Phones"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/Laptops"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/Accessories"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/SmartWatches"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/MacBooks"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
          <Link to={"/Iphones"} className={"lg:w-full flex flex-wrap justify-center"}>
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
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
