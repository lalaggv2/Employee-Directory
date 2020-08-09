
import React from "react";

function SearchForm(props) {
  return (
    <div className="uk-container form-container">
      {/* <form> */}
      <div className="uk-margin">
        <label>Search Employee by Name:</label><br />
        <input
          onChange={props.filter}
          className="input-box uk-input uk-form-width-medium" type="text"
          placeholder="Employee Name"
        />
      </div>
      {/* </form> */}
    </div>
  )
};

// handleInputChange = event => {
//   // Getting the value and name of the input which triggered the change
//   const { name, value } = event.target;

//   // Updating the input's state
//   this.setState({
//     [name]: value
//   });
// };


export default SearchForm;