import React from "react";
import PropTypes from 'prop-types';

const CoffeeDetail = (props) => {
  const { coffee, onClickingDelete} = props;

  return(
    <React.Fragment>
      <div>
        <span>Name: {coffee.names}</span>
        <br></br>
        <span>Roast: {coffee.roast}</span>
        <br></br>
        <span>Quantity: {coffee.quantity}</span>
        <br></br>
        <span>Origin: {coffee.origin}</span>
        <br></br>
        <span>Price: ${coffee.price}</span>
        <br></br>
        <button onClick={props.onClickingEdit}>Edit Coffee</button>
        <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button>
      </div>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CoffeeDetail;