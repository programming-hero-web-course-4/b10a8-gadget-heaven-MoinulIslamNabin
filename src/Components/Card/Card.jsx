
import { Link } from "react-router-dom";


const Card = ({ card }) => {

  

  const {
    id,
    title,
    img,
    category,
    price,
    description,
    specs,
    availability,
    rating,
  } = card;

  return (
    <div className="card bg-white shadow-md">
      <figure className="px-4 pt-4 pb-2">
        <img src={img} alt="Shoes" className="rounded-xl max-h-36" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-base font-semibold text-black/60">Price:{price}k</p>
        <div className="card-actions">
          <Link to={`/Details/${id}`}>
            <button
              className="btn rounded-full btn-outline text-[#9538E2] font-bold border-[#9538E2]"
              onClick={() => {
                document.title = "Details"; 
                window.scrollTo({ top: 300, behavior: "smooth" }); 
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
