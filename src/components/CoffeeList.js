import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const CoffeeList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee) => {
        const totalPrice = coffee.price * coffee.quantity;
        return (
          <Coffee
            names = {coffee.names}
            quantity = {coffee.quantity}
            roast = {coffee.roast}
            price = {coffee.price}
            totalPrice = {totalPrice}
            origin = {coffee.origin}
            id = {coffee.id}
            key = {coffee.id} 
            clickedOnCoffee = {props.selectedCoffee}
            soldClickOnCoffee = {props.soldClickOnCoffee}
          />  
        );
      })}
    </React.Fragment>
  )
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  selectedCoffee: PropTypes.func
};

export default CoffeeList;