import Swal from "sweetalert2";
import group from "../../assets/Group.png";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import {
  clearCart,
  getAllCart,
  removeCart,
} from "../../utilities/localStorage";
import { useNavigate } from "react-router-dom";

const DashCart = () => {
  const navigate = useNavigate()

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

  const handleRemoveCart = (id) => {
    removeCart(id);
    const cart = getAllCart();
    setProduct(cart);
  };

  const handlePurchase = () => {
    if (product.length > 0) {
      clearCart();
      const cart = getAllCart();
      setProduct(cart);

      Swal.fire({
        title: "Payment Successful!",
        html: `
    <hr class="w-full border-gray-300 mb-4">
    <p class="text-base text-black/60 font-semibold">
      Thank you for your purchase.
    </p>
    <br>
    <p class="text-base text-black/60 font-semibold -mt-2">
      Total: $${totalCost}
    </p>
  `,

        imageUrl: group,
        imageAlt: "Success Image",
        confirmButtonText: "Close",
        customClass: {
          popup: 'rounded-2xl',  
          title: "text-2xl text-black font-bold",
          
          text: "text-base md:text-md lg:text-lg text-black/60 font-semibold",

          image: "pt-3",
          actions: 'mt-2',
          confirmButton:
            "bg-[#9538E2] px-36 md:px-52 text-white rounded-full font-bold",
        },
      }).then(() => {
        navigate("/");  
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });  
        }, 100);
      });
    } else {
      Swal.fire({
        title: "Cart is Empty",
        text: "Please add items to the cart before purchasing.",
        icon: "warning",
        confirmButtonText: "Home",
        customClass: {
          popup: 'rounded-2xl',  
          title: "text-2xl text-black font-bold",

          text: "text-base md:text-md lg:text-lg text-black/60 font-semibold",

          image: "pt-3",

          confirmButton: "bg-[#9538E2] px-36 md:px-52 text-white rounded-full font-bold",
      },
    }).then(() => {
      navigate("/");  
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });  
      }, 100);
    });
  }
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
          <button
            onClick={handlePurchase}
            className="hidden md:block btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none hover:from-gray-500 hover:to-gray-900 ease-in-out duration-500"
          >
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
          <button
            onClick={handlePurchase}
            className="btn rounded-full btn-outline text-white font-extrabold bg-gradient-to-b from-[#9538E2] from-[10%] to-pink-300 border-none"
          >
            Purchase
          </button>
        </div>
      </div>

      {Array.isArray(product) && product.length !== 0 ? (
        product.map((card) => (
          <Cart
            handleRemoveCart={handleRemoveCart}
            key={card.id}
            card={card}
          ></Cart>
        ))
      ) : (
        <div className="flex justify-center items-center text-xl font-bold text-gray-500">
          <p>Empty</p>
        </div>
      )}
    </div>
  );
};

export default DashCart;
