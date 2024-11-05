import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigation } from "react-router-dom";

const Phone = () => {
  const navigation = useNavigation();

  const [phoneCard, setPhoneCard] = useState([]);

  useEffect(() => {
    fetch("./phone.json")
      .then((res) => res.json())
      .then((data) => setPhoneCard(data));
  }, []);

  return (
    <>
      {Array.isArray(phoneCard) &&
        phoneCard.map((card) =>
          navigation.state === "loading" ? (
            <Skeleton key={card.id}></Skeleton>
          ) : (
            <Card key={card.id} card={card}></Card>
          )
        )}
    </>
  );
};

export default Phone;
