import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const CoffeeList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => 
        <Coffee
          names = {coffee.name}
          origin = {coffee.origin}
          price = {coffee.price}
          roast = {coffee.roast}
          quantity = {coffee.quantity}
          id = {coffee.id}
          key = {coffee.id} 
          clickedOnCoffee = {props.selectedCoffee}
          soldClickOnCoffee = {props.soldClickOnCoffee}
          />  
      )}
    </React.Fragment>
  )
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  selectedCoffee: PropTypes.func
};

export default CoffeeList;