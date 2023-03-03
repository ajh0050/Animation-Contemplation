import React, { Component } from "react";
import "./Quotes.css";
import PropTypes from "prop-types";
import { getQuotes } from '../../ApiCalls'

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }
  componentDidMount() {
    getQuotes(this.props.name)
      .then((data) => {
        this.setState({ quotes: data });
      })
  }

  displayQuotes = () => {
    let quotes = this.state.quotes?.map((quote) => {
      return (
        <figure className="quote-container">
          <blockquote>
            <q className="quote">{quote.quote}</q>
          </blockquote>
          <figcaption>
            &mdash; {quote.character}, <cite>{quote.anime}</cite>
          </figcaption>
          <button className="add-to-favorites-button" onClick={() => this.props.addFavorite(quote)}>❤️</button>
        </figure>)
    })
    return quotes
  }
  render() {
    return (
      <div className="quotes-container">
        {this.displayQuotes()}
      </div>
    );
  }
}

export default Quotes;

Quotes.propTypes = {
  name: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
}