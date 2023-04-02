import React from "react";
import PropTypes from 'prop-types';

const ReuseableCoffeeForm = (props) => {
  return(
    <React.Fragment>
      <div>
        <form onSubmit={props.formSubmissionHandler}>
          <div>
            <label>Your Name: </label>
            <input
              type = "text"
              name = "name"
              placeholder = "Your name:" />
          </div>
          <div>
            <label>Origin: </label>
            <select
              type = "text"
              name = "origin"
              placeholder = "Place of Origin">
                <option> </option>
                <option>Guatemalan</option>
                <option>Ethiopian</option>
                <option>Indonesian</option>
                <option>Colombian</option>
              </select>
          </div>
          <div>
            <label>Roast Type: </label>
            <select
              type = "text"
              name = "roast"
              placeholder = "Which roast?">
                <option> </option>
                <option>Light Roast</option>
                <option>Medium Roast</option>
                <option>Dark Roast</option>
              </select>
          </div>
          <div>
            <label>Quantity: </label>
            <input
              type = "number"
              name = "quantity"
              placeholder = "How many bags?" />
          </div>
          <button type = "submit">{props.buttonText}</button>
          {/* <div>
            <label>Total: </label>
            <input
              type = "number"
              name = "price"
              placeholder = "Total cost.." />
          </div> */}
        </form>
        <br></br>
      </div>
    </React.Fragment>
  )
}

ReuseableCoffeeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReuseableCoffeeForm;
