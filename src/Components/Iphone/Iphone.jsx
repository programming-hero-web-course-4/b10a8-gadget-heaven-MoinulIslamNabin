import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const Iphone = () => {
  const navigation = useNavigation();

  const [iphoneCard, setIphoneCard] = useState([]);

  useEffect(() => {
    fetch("./iphone.json")
      .then((res) => res.json())
      .then((data) => setIphoneCard(data));
  }, []);
  return (
    <>
      {Array.isArray(iphoneCard) &&
        iphoneCard.map((card) =>
          navigation.state === "loading" ? (
            <Skeleton key={card.id}></Skeleton>
          ) : (
            <Card key={card.id} card={card}></Card>
          )
        )}
    </>
  );
};

export default Iphone;
