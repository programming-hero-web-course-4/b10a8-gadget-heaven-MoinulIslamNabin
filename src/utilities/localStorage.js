import { toast, Slide } from "react-toastify";

const getAllCart = () => {
  const all = localStorage.getItem("cart");

  if (all) {
    const cart = JSON.parse(all);
    return cart;
  } else {
    return [];
  }
};

const addCart = (item) => {
  const cart = getAllCart();
  const isExist = cart.find(product => product.id == item.id)
  if(isExist){
    return toast.error('Product already exists!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
  }
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success('Successfully added to cart!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });
};
const getAllWish = () => {
  const all = localStorage.getItem("wish");

  if (all) {
    const wish = JSON.parse(all);
    return wish;
  } else {
    return [];
  }
};

const addWish = (item) => {
  const wish = getAllWish();
  const isExist = wish.find(product => product.id == item.id)
  if(isExist){
    return toast.error('Product already exists!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
  }
  wish.push(item);
  localStorage.setItem("wish", JSON.stringify(wish));
  toast.success('Successfully added to wishlist!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });
};

export { addCart, addWish, getAllCart, getAllWish };
