import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const CoffeeList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffee, index) =>
      <Coffee
        names = {coffee.names}
        amount = {coffee.amount}
        location = {coffee.location}
        key = {index}
        />  
      )}
    </React.Fragment>
  )
}

CoffeeList.PropTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeList;