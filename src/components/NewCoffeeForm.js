import React from "react";
import PropTypes from 'prop-types';
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";
import { v4 } from "uuid";

const NewCoffeeForm = (props) => {
  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();

    console.log('Name: ', event.target.name.value);
    console.log('Origin: ', event.target.origin.value);
    // console.log('Price: ', event.target.price.value);
    console.log('Roast: ', event.target.roast.value);
    console.log('Quantity: ', event.target.quantity.value);

    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      // price: event.target.price.value,
      roast: event.target.roast.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <hr />
      <ReuseableCoffeeForm 
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Submit"/>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}
export default NewCoffeeForm;