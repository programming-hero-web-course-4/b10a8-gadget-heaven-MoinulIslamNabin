import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const SmartWatch = () => {
  const navigation = useNavigation();

  const [smartWatchCard, setSmartWatchCard] = useState([]);

  useEffect(() => {
    fetch("./smartWatches.json")
      .then((res) => res.json())
      .then((data) => setSmartWatchCard(data));
  }, []);

  return (
    <>
      {Array.isArray(smartWatchCard) &&
        smartWatchCard.map((card) =>
          navigation.state === "loading" ? (
            <Skeleton key={card.id}></Skeleton>
          ) : (
            <Card key={card.id} card={card}></Card>
          )
        )}
    </>
  );
};

export default SmartWatch;
