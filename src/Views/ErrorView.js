import React from "react";
import Error from "../Components/Error/Error";
import Header from "../Components/Header/Header";
import PropTyes from "prop-types";

const ErrorView = (props) => {
  return (
    <div>
      <Header />
      <Error error={props.error} />
    </div>
  );
}

export default ErrorView;

ErrorView.propTypes = {
  error: PropTyes.string.isRequired,
}