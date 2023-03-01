import React, { Component } from "react";


class Quotes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Quotes about {this.props.name}</h1>
      </div>
    );
  }
}

export default Quotes;