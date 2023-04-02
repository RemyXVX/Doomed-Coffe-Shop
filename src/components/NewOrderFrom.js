import React from "react";
import { PropTypes } from 'prop-types';

const NewCoffeeForm = () => {
  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type = 'type'
          name = 'name'
          placeholder = 'Bean type' />
      </form>
  
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
}

export default NewCoffeeForm;