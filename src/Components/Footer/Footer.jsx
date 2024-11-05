import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-24  bg-white">
      <footer className="container !mx-auto justify-items-center footer text-base-content border-base-300 border-b px-24 pb-8 pt-16">
        <div className="hero-content w-full text-center">
          <div className="w-10/12 flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold text-black">
              Gadget Heaven
            </h1>
            <p className="w-8/12 text-center text-base text-black/60 font-medium">
              Leading the way in cutting-edge technology and inovation.
            </p>
          </div>
        </div>
      </footer>

      <footer className="justify-items-center items-start footer text-base-content py-10 px-14">
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-black font-bold">Services</h6>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Product Support</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Order Tracking</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Shipping & Delivery</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Returns</Link>
        </nav>
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-black font-bold">Company</h6>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">About us</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Career</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Contact</Link>
        </nav>
        <nav className="justify-items-center">
          <h6 className="footer-title opacity-100 text-lg !text-black font-bold">Legal</h6>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Terms of use</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Privacy policy</Link>
          <Link to={"/Terms"} className="link link-hover text-base text-black/60 font-normal">Cookie policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
