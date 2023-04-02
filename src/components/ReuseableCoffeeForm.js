import React from "react";
import PropTypes from 'prop-types';

const ReuseableCoffeeForm = (props) => {
  return(
    <React.Fragment>
      <div>
    <form onSubmit={props.formSubmissionHandler}>
      <div>
        <input
          type = "text"
          name = "name"
          placeholder = "Your name:" />
      </div>
      <div>
        <input
          type = "dropdown"
          name = "roast"
          placeholder = "Which roast?" />
      </div>
      <div>
        <input
          type = "number"
          name = "quantity"
          placeholder = "How many bags?" />
      </div>
      <br></br>
      <div>
        <input
          type = "number"
          name = "price"
          placeholder = "Total cost.." />
      </div>
      <div>
        <input
          type = "text"
          name = "origin"
          placeholder = "Place of Origin" />
      </div>
    </form>
  </div>
    </React.Fragment>
  )
}

ReuseableCoffeeForm.prototype = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReuseableCoffeeForm;
