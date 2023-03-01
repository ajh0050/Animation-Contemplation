import React from "react";
import {Link} from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <Link to={`/${props.character.name}`}>
        <h3>{props.character.name}</h3>
      </Link>
    </div>
  );
}

export default CharacterCard;