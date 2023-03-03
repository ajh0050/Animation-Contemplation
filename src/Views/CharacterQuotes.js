import React from "react";
import Quotes from "../Components/Quotes/Quotes";
import Header from "../Components/Header/Header";

const CharacterQuotes = (props) => {
  return (
    <div>
      <Header />
      <Quotes name={props.name} addFavorite={props.addFavorite}/>
    </div>
  );
}

export default CharacterQuotes;