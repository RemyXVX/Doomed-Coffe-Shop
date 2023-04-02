import React from "react";
import { PropTypes } from 'prop-types';

const NewCoffeeForm = () => {
  const handleNewCoffeeFormSubmission = (event) => {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      location: event.target.location.value,
      amount: event.target.amount.value,
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