import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  /* const [cards, setCards] = useState([]);
  const addCard = async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/"
    );
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  }; */

  const data = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => data.addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.isLoading
          ? "loading..."
          : data.responses.map((r) => (
              <PlayingCard key={r.id} front={r.cards[0].image} />
            ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
