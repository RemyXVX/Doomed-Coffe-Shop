import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div onClick={() => props.clickedOnCoffee(props.id)}>
        <h3>Your Name: {props.names}</h3>
        <span>{props.quantity} bag(s) of</span>
        <br></br>
        <span>Roast : {props.roast}</span>
        <br></br>
        <span>for the amount of ${props.price}</span>
        <br></br><br></br>
        <span>& this batch came from {props.origin}</span>
      </div>
      <button onClick={() => props.soldClickOnCoffee(props.id)}>Sell</button>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  clickedOnCoffee: PropTypes.func,
  soldClickOnCoffee: PropTypes.func
}

export default Coffee;