import React from "react";
import PropTypes from "prop-types";
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";

const EditCoffee = (props) => {
  const { coffee } = props;

  const handleEditCoffeeFormSubmission = (event) => {
    event.preventDefault();
    const names = event.target.name.value.trim();
    const origin = event.target.origin.value.trim();
    const roast = event.target.roast.value.trim();
    //const price: event.target.price.value.trim();
    const quantity = parseInt(event.target.quantity.value.trim());

    if (!names || !origin || !roast || !quantity) {
      // Display an error message if any field is empty
      alert("Please fill in all fields.");
      return;
    }

    props.onEditCoffee({
      names: names,
      origin: origin,
      roast: roast,
      quantity: quantity,
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

EditCoffee.propTypes = {
  coffee : PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffee;
