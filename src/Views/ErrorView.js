import React from "react";
import Error from "../Components/Error/Error";

const ErrorView = (props) => {
  return (
    <div>
      <Error error={props.message} />
    </div>
  );
}

export default ErrorView;