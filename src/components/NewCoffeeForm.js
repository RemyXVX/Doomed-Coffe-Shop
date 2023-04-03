import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";
import { v4 } from "uuid";

const NewCoffeeForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();

    const names = event.target.names.value.trim();
    const origin = event.target.origin.value.trim();
    const roast = event.target.roast.value.trim();
    const price = parseFloat(event.target.price.value);
    const quantity = parseInt(event.target.quantity.value);

    if (!names || !origin || !roast || !quantity) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setErrorMessage("");
    }

    props.onNewCoffeeCreation({
      names: names,
      origin: origin,
      roast: roast,
      quantity: quantity,
      price: price,
      id: v4()
    });

    event.target.reset();
  }

  return (
    <React.Fragment>
      <hr />
      <ReuseableCoffeeForm 
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Submit"/>
      {errorMessage &&<div id="errorMessage">{errorMessage}</div>}
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;
