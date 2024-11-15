import React, { useEffect, useState } from "react";
import Vr from "../../assets/banner.jpg";
import "./Home.css";
import { useNavigation } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";

const Home = () => {
  const navigation = useNavigation();

  const [isActive, setIsActive] = useState({
    all: true,
    laptop: false,
    phone: false,
    access: false,
    mac: false,
    smart: false,
    iphone: false,
    status: "all",
  });

  const handleActive = (status) => {
    if (status === "all") {
      setIsActive({
        all: true,
        laptop: false,
        phone: false,
        access: false,
        mac: false,
        smart: false,
        iphone: false,
        status: "all",
      });
    } else if (status === "laptop") {
      setIsActive({
        all: false,
        laptop: true,
        phone: false,
        access: false,
        mac: false,
        smart: false,
        iphone: false,
        status: "laptop",
      });
    } else if (status === "phone") {
      setIsActive({
        all: false,
        laptop: false,
        phone: true,
        access: false,
        mac: false,
        smart: false,
        iphone: false,
        status: "phone",
      });
    } else if (status === "access") {
      setIsActive({
        all: false,
        laptop: false,
        phone: false,
        access: true,
        mac: false,
        smart: false,
        iphone: false,
        status: "access",
      });
    } else if (status === "mac") {
      setIsActive({
        all: false,
        laptop: false,
        phone: false,
        access: false,
        mac: true,
        smart: false,
        iphone: false,
        status: "mac",
      });
    } else if (status === "smart") {
      setIsActive({
        all: false,
        laptop: false,
        phone: false,
        access: false,
        mac: false,
        smart: true,
        iphone: false,
        status: "smart",
      });
    } else if (status === "iphone") {
      setIsActive({
        all: false,
        laptop: false,
        phone: false,
        access: false,
        mac: false,
        smart: false,
        iphone: true,
        status: "iphone",
      });
    }
  };

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
          <button
            onClick={() => handleActive("all")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
            }
          >
            All Poducts
          </button>
          <button
            onClick={() => handleActive("laptop")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            Laptops
          </button>
          <button
            onClick={() => handleActive("phone")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            Phones
          </button>
          <button
            onClick={() => handleActive("access")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            Accessories
          </button>
          <button
            onClick={() => handleActive("smart")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            Smart Watches
          </button>
          <button
            onClick={() => handleActive("mac")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            MacBooks
          </button>
          <button
            onClick={() => handleActive("iphone")}
            className={
              isActive
                ? "btn w-auto lg:w-5/6 rounded-full border-none bg-slate-100 btn-outline text-black/60"
                : "btn w-auto lg:w-5/6 rounded-full border-none bg-[#9538E2] btn-outline text-white"
            }
          >
            Iphones
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
            <span className="flex w-full bg-gray-900 text-white rounded p-2">
              Gradient border
            </span>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-3/4">
          <AllProduct></AllProduct>
        </div>
      </div>
    </div>
  );
};

export default Home;
