import React from "react";
import PropTypes from "prop-types";
import './Error.css';

const Error = (props) => {
  return (
    <div className="error-message-container">
      <h1 className="error-message">{props.error.toString()}</h1>
    </div>
  );
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};