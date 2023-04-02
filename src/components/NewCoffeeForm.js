import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";
import { v4 } from "uuid";

const NewCoffeeForm = (props) => {
  const [nameError, setNameError] = useState('');
  const [originError, setOriginError] = useState('');
  const [roastError, setRoastError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();

    const names = event.target.names.value.trim();
    const origin = event.target.origin.value.trim();
    const roast = event.target.roast.value.trim();
    const quantity = parseInt(event.target.quantity.value);

    let hasErrors = false;

    if (!names) {
      setNameError('Name is required');
      hasErrors = true;
    } else {
      setNameError('');
    }

    if (!origin) {
      setOriginError('Origin is required');
      hasErrors = true;
    } else {
      setOriginError('');
    }

    if (!roast) {
      setRoastError('Roast is required');
      hasErrors = true;
    } else {
      setRoastError('');
    }

    if (isNaN(quantity) || quantity <= 0) {
      setQuantityError('Quantity must be a positive integer');
      hasErrors = true;
    } else {
      setQuantityError('');
    }

    if (!hasErrors) {
      props.onNewCoffeeCreation({
        names: names,
        origin: origin,
        roast: roast,
        quantity: quantity,
        id: v4()
      });

      event.target.reset();
    }
  }

  return (
    <React.Fragment>
      <hr />
      <ReuseableCoffeeForm 
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Submit"/>

      {nameError && <div>{nameError}</div>}
      {originError && <div>{originError}</div>}
      {roastError && <div>{roastError}</div>}
      {quantityError && <div>{quantityError}</div>}
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;
