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
        origin = {coffee.origi}
        price = {coffee.price}
        roast = {props.roast}
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