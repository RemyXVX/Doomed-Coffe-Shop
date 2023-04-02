import React from "react";
import PropTypes from "prop-types";
import ReuseableCoffeeForm from "./ReuseableCoffeeForm";

const EditCoffee = (props) => {
  const { coffee } = props;

  const handleEditCoffeeFormSubmission = (event) => {
    event.preventDefault();
    const names = event.target.names.value;
    const origin = event.target.origin.value;
    const roast = event.target.roast.value;
    //const price: event.target.price.value
    const quantity = parseInt(event.target.quantity.value);

    if (!names || !origin || !roast || !quantity) {
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
