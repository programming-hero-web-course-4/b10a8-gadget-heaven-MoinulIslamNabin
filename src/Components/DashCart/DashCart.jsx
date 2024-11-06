import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const DashCart = () => {
  return (
    <div className="container mx-auto mt-8 lg:px-12 px-3">
      <div className="navbar justify-between mb-8 pt-4">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl text-black/80 font-bold">Cart</a>
        </div>

        <div className="navbar-end w-auto gap-4">
          <h4 className="lg:text-2xl  text-xl text-black/70 text-center font-bold">
            Total cost: 999.99
          </h4>
          <button className="hidden md:block btn rounded-full btn-outline text-[#9538E2] font-extrabold border-[#9538E2] border-2">
            Sort by Price
          </button>
          <button className="hidden md:block btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none hover:from-gray-500 hover:to-gray-900 ease-in-out duration-500">
            Purchase
          </button>
        </div>
      </div>
      <div className="navbar justify-center md:hidden mb-8 pt-4">
        <div className="navbar-start">
          <button className="btn rounded-full btn-outline text-[#9538E2] font-extrabold border-[#9538E2] border-2">
            Sort by Price
          </button>
        </div>

        <div className="navbar-end w-auto gap-4">
          <button className="btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none">
            Purchase
          </button>
        </div>
      </div>

      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
      <Cart></Cart>
    </div>
  );
};

export default DashCart;
