import React from "react";
import Quotes from "../Components/Quotes/Quotes";
import PropTypes from "prop-types";

const CharacterQuotesView = (props) => {
  return (
    <div>
      <Quotes name={props.name} addFavorite={props.addFavorite}/>
    </div>
  )
}

export default CharacterQuotesView;

CharacterQuotesView.propTypes = {
  name: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
}