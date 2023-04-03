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
              name = "names"
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
          <div>
            <label>Size: </label>
            <select
              type = "number"
              name = "price"
              placeholder = "Total cost..">
                <option> </option>
                <option value="4">Small</option>
                <option value="9">Medium</option>
                <option value="20">Large</option>
                <option value="35">CHONK</option>
              </select>
          </div>
          <button type = "submit">{props.buttonText}</button>
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
