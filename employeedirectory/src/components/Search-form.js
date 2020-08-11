
import React from "react";

function SearchForm(props) {
  return (
    <div className="uk-container form-container">

      <div className="search">
        <label>Search Employee by Name:</label>
        <input
          onChange={props.filter}
          className="input-box uk-input uk-form-width-medium" type="text"
          placeholder="Employee Name"
        />
      </div>

    </div>
  )
};


export default SearchForm;