import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <React.Fragment>
      <div onClick={() => props.clickedOnCoffee(props.id)}>
        <span>Your Name: {props.names}</span>
        <br></br>
        <span>Amount: {props.quantity === 0 ? 'Sold Out' : `${props.quantity} ${props.quantity > 1 ? 'bags' : 'bag'}`}</span>

        <br></br>
        <span>Roast : {props.roast}</span>
        <br></br>
        <span>Total: ${props.totalPrice.toFixed(2)}</span>
        <br></br>
        <span>& batch came from {props.origin}</span>
      </div>
      <br></br>
      <button onClick={() => props.soldClickOnCoffee(props.id)}>Sell</button>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  names: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  clickedOnCoffee: PropTypes.func.isRequired,
  soldClickOnCoffee: PropTypes.func.isRequired,
};


export default Coffee;