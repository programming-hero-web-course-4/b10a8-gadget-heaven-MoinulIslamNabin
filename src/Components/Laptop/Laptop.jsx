import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const Laptop = () => {
  const navigation = useNavigation();

  const [laptopCard, setLaptopCard] = useState([]);

  useEffect(() => {
    fetch("./laptop.json")
      .then((res) => res.json())
      .then((data) => setLaptopCard(data));
  }, []);
  return (
    <>
      {Array.isArray(laptopCard) &&
        laptopCard.map((card) => <Card key={card.id} card={card}></Card>)}
    </>
  );
};

export default Laptop;
