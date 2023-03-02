import React, { Component } from "react";
import "./Quotes.css";

class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }
  componentDidMount() {
    fetch(`https://animechan.vercel.app/api/quotes/character?name=${this.props.name}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quotes: data });
      })
  }
  render() {
    let quotes = this.state.quotes?.map((quote) => {
      return (
        <figure className="quote-container">
          <blockquote>
            <p className="quote">{quote.quote}</p>
          </blockquote>
          <figcaption>
            &mdash; {quote.character}, <cite>{quote.anime}</cite>
          </figcaption>
          <button>❤️</button>
        </figure>)
    })
    return (
      <div className="quotes-container">
        {quotes}
      </div>
    );
  }
}

export default Quotes;