import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifIds } = this.props;
    changeGifIds(event.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control form-search"
          placeHolder="write something"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
