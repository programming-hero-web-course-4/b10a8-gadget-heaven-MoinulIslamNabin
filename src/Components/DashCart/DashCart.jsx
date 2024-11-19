import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { getAllCart } from "../../utilities/localStorage";

const DashCart = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const cart = getAllCart();
    setProduct(cart);
  }, []);

  const [sort, setSort] = useState(false);
  const handleSort = () => {
    const sortedProduct = [...product].sort((a, b) => {
      if (sort) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProduct(sortedProduct);
    setSort(!sort);
  };

  const handlePurchase = () => {
    
  };

  const totalCost = product.reduce((previous, updated) => {
    return previous + updated.price;
  }, 0);

  return (
    <div className="container mx-auto mt-8 lg:px-12 px-3">
      <div className="navbar justify-between mb-8 pt-4">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl text-black/80 font-bold">Cart</a>
        </div>

        <div className="navbar-end w-auto gap-4">
          <h4 className="lg:text-2xl  text-xl text-black/70 text-center font-bold">
            Total cost: ${totalCost}
          </h4>
          <button
            onClick={handleSort}
            className="hidden md:block btn rounded-full btn-outline text-[#9538E2] font-extrabold border-[#9538E2] border-2"
          >
            Sort by Price
          </button>
          <button onClick={handlePurchase} className="hidden md:block btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none hover:from-gray-500 hover:to-gray-900 ease-in-out duration-500">
            Purchase
          </button>
        </div>
      </div>
      <div className="navbar justify-center md:hidden mb-8 pt-4">
        <div className="navbar-start">
          <button
            onClick={handleSort}
            className="btn rounded-full btn-outline text-[#9538E2] font-extrabold border-[#9538E2] border-2"
          >
            Sort by Price
          </button>
        </div>

        <div className="navbar-end w-auto gap-4">
          <button onClick={handlePurchase} className="btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none">
            Purchase
          </button>
        </div>
      </div>

      {Array.isArray(product) && product.length !== 0 ? (
        product.map((card) => <Cart key={card.id} card={card}></Cart>)
      ) : (
        <div className="flex justify-center items-center text-xl font-bold text-gray-500">
          <p>No products added yet.</p>
        </div>
      )}
    </div>
  );
};

export default DashCart;
