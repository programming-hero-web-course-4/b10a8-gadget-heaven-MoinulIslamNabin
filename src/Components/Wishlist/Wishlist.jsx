

const Wishlist = () => {
    return (
        <div className="mt-4">
      <div className="card bg-white flex-row items-center border-2 border-[#1313131A] p-6">
        <figure className="w-1/2 md:w-1/5">
          <img src="https://i.ibb.co.com/2sMwLkc/64cbe8eefef57507687a179a-jbl-tune-125-true-wireless-headphones.jpg" alt="Shoes" className="rounded-xl max-h-28" />
        </figure>
        <div className="card-body p-0 items-start justify-center ml-6 text-center">
          <h2 className="text-2xl font-semibold text-[#131313]/80">Shoes</h2>
          <p className="text-lg font-medium text-[#131313]/50">description</p>
          <p className="text-xl text-black/60 text-start font-bold">
            Price: 999.99
          </p>
          <button className="btn rounded-full btn-outline text-md text-white font-bold bg-[#9538E2] border-none">
                    Add to cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="btn bg-transparent border-0 rounded-badge shadow-none"
        >
          <img src="https://i.ibb.co.com/9ZvxFyb/delete.png" alt="" />
        </button>
      </div>
    </div>
    );
};

export default Wishlist;