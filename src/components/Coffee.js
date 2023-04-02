import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div>
        <h3>Your Name: {props.names}</h3>
        <span>Roast : {props.roast}</span>
        <span>for the amount of {props.price}</span>
        <br></br>
        <span>this batch came from {props.origin}</span>
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}

export default Coffee;