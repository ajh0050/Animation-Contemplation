import React from "react";
import Favorites from "../Components/Favorites/Favorites";
import Header from "../Components/Header/Header";

const FavoritesView = (props) => {
  return (
    <div>
        <Header />
      <Favorites deleteFavorite={props.deleteFavorite} favorites={props.favorites}/>
    </div>
  );
}

export default FavoritesView;