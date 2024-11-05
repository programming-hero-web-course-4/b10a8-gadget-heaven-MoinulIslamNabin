import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const Accessories = () => {
  const navigation = useNavigation();

  const [accessoriesCard, setAccessoriesCard] = useState([]);

  useEffect(() => {
    fetch("./accessories.json")
      .then((res) => res.json())
      .then((data) => setAccessoriesCard(data));
  }, []);
  return (
    <>
      {Array.isArray(accessoriesCard) && accessoriesCard.map((card) =>
        navigation.state === "loading" ? (
          <Skeleton key={card.id}></Skeleton>
        ) : (
          <Card key={card.id} card={card}></Card>
        )
      )}
    </>
  );
};

export default Accessories;
