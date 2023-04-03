import React, { useState } from "react";
import PropTypes from "prop-types";
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";

const EditCoffee = (props) => {
  const { coffee } = props;
  const [errorMessage, setErrorMessage] = useState("")

  const handleEditCoffeeFormSubmission = (event) => {
    event.preventDefault();
    
    const names = event.target.names.value.trim();
    const origin = event.target.origin.value.trim();
    const roast = event.target.roast.value.trim();
    const price = parseFloat(event.target.price.value.trim());
    const quantity = parseInt(event.target.quantity.value.trim());

    if (!names || !origin || !roast || !quantity || !price) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setErrorMessage("");
    }

    props.onEditCoffee({
      names: names,
      origin: origin,
      roast: roast,
      quantity: quantity,
      price: price,
      id: coffee.id
    });
  }

  return(
    <React.Fragment>
      <ReuseableCoffeeForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Edit" />
        {errorMessage &&<div id="errorMessage">{errorMessage}</div>}
    </React.Fragment>
  );
}

EditCoffee.propTypes = {
  coffee : PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffee;
