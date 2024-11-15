import React, { useEffect, useState } from "react";
import Card from "../Card/Card";


const AllProduct = () => {
  

  const [allCard, setAllCard] = useState([]);

  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  return (
    <>
      {Array.isArray(allCard) &&
        allCard.map((card) => <Card key={card.id} card={card}></Card>)}
    </>
  );
};

export default AllProduct;
