import React from "react";
import PropTypes from "prop-types";

const Error = (props) => {
  return (
    <div>
      <h1>{props.error.toString()}</h1>
    </div>
  );
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
};