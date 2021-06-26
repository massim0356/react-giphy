import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          placeHolder="write something"
        />
      </div>
    );
  }
}

export default SearchBar;
