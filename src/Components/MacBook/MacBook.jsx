import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const MacBook = () => {
  const navigation = useNavigation();

  const [macBookCard, setMacBookCard] = useState([]);

  useEffect(() => {
    fetch("./macBook.json")
      .then((res) => res.json())
      .then((data) => setMacBookCard(data));
  }, []);

  return (
    <>
      {Array.isArray(macBookCard) &&
        macBookCard.map((card) =>
          navigation.state === "loading" ? (
            <Skeleton key={card.id}></Skeleton>
          ) : (
            <Card key={card.id} card={card}></Card>
          )
        )}
    </>
  );
};

export default MacBook;
