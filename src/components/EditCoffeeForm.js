import React from "react";
import PropTypes from "prop-types";
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";

const EditCoffeeForm = (props) => {
  const { coffee } = props;

  const handleEditCoffeeFormSubmission = (event) => {
    event.preventDefault();
    props.onEditCoffee({
      names: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      quantity: event.target.quantity.value,
      id: coffee.id
    });
  }

  return(
    <React.Fragment>
      <ReuseableCoffeeForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Edit" />
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee : PropTypes.object,
  onEditCoffee: PropTypes.func
}