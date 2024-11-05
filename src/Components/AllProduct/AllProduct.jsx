import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const AllProduct = () => {
  const navigation = useNavigation();

  const [allCard, setAllCard] = useState([]);

  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  return (
    <>
      {Array.isArray(allCard) && allCard.map((card) =>
        navigation.state === "loading" ? (
          <Skeleton key={card.id}></Skeleton>
        ) : (
          <Card key={card.id} card={card}></Card>
        )
      )}
    </>
  );
};

export default AllProduct;
