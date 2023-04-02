import React from "react";
import PropTypes from 'prop-types';

const CoffeeDetail = (props) => {
  const { coffee, onClickDelete } = props;

  return(
    <React.Fragment>
      <div>
        <span>Name: {coffee.names}</span>
        <span>Roast: {coffee.roast}</span>
        <span>Quantity: {coffee.quantity}</span>
        <span>Origin: {coffee.origin}</span>
      </div>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickDelete: PropTypes.func
}

export default CoffeeDetail;