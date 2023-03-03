import React from "react";
import Favorites from "../Components/Favorites/Favorites";
import Header from "../Components/Header/Header";
import PropTypes from "prop-types";
const FavoritesView = (props) => {
  return (
    <div>
        <Header />
      <Favorites deleteFavorite={props.deleteFavorite} favorites={props.favorites}/>
    </div>
  );
}

export default FavoritesView;

FavoritesView.propTypes = {
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}