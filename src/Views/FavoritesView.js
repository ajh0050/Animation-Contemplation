import React from "react";
import Favorites from "../Components/Favorites/Favorites";
import Header from "../Components/Header/Header";

const FavoritesView = (props) => {
  return (
    <div>
        <Header />
      <Favorites favorites={props.favorites}/>
    </div>
  );
}

export default FavoritesView;