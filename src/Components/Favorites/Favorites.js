import React from "react";
import './Favorites.css';
import PropTypes from 'prop-types';

const Favorites = (props) => {

  let displayFavorites = props.favorites?.map((quote) => {
    return (
      <figure className="quote-container">
        <blockquote>
          <q className="quote">{quote.quote}</q>
        </blockquote>
        <figcaption>
          &mdash; {quote.character}, <cite>{quote.anime}</cite> <button className="delete-from-favorites-button" onClick={() => props.deleteFavorite(quote)}>🗑</button>
        </figcaption>
       
      </figure>)
  })
  return (
    <div className="favorites-content-container">
      <h2 className="favorites-title">Your Favorite Quotes</h2>
      {props.favorites.length === 0 && <h3 className="no-favorites-message">You have no favorites yet!</h3>}
      <div className="favorite-quotes-container">
        {displayFavorites}
      </div>
    </div>
  );
}

export default Favorites;

Favorites.propTypes = {
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}