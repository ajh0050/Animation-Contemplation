import React, { Component } from "react";
import { Link } from "react-router-dom";

class Characters extends Component {
  constructor() {
    super();
    this.state = {
        characters: [],
    }
  }
  componentDidMount() {
    fetch("https://animation-contemplation-api.fly.dev/characters")
      .then((response) => response.json())
      .then((data) => {
        this.setState({characters: data})
      });
  }

  render() {
    let charactersButtons = this.state.characters.map((character) => {
        return <Link to={`/character/${character}`}>
            <button>{character}</button>
        </Link>
    })
    return (
      <div>
        {charactersButtons}
      </div>
    );
  }
}

export default Characters;