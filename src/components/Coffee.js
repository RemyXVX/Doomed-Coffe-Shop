import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div>
        <h3>Bean type: {props.names}</h3>
        <span>To : {props.location}</span>
        <span>for the amount of {props.amount}</span>
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