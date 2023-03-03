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
                &mdash; {quote.character}, <cite>{quote.anime}</cite>
              </figcaption>
              <button className="add-to-favorites-button" onClick={() => props.deleteFavorite(quote)}>🗑</button>
            </figure>)
        })
  return (
    <div className="favorites-content-container">
      <h1>Your Favorite Quotes</h1>
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