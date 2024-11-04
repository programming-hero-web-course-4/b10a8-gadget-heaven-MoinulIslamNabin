

const Card = ({ card }) => {
  const { id, title, img, category, price, description, specs, availability, rating} = card;
  

  return (
    <div className="card bg-white shadow-md">
      <figure className="px-4 pt-4 pb-2">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl max-h-36"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn rounded-full btn-outline text-[#9538E2] border-[#9538E2]">
           View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
