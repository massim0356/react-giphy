import "../assets/stylesheets/application.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Simple React component
// const Hello = (props) => {
//   const { name } = props;
//   return <h1>Ayoooo {name}</h1>;
// };

// Complex React component - with classes
// eslint-disable-next-line react/prefer-stateless-function
class Hello extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { name } = this.props;
    return <h1>Ayoooo {name}</h1>;
  }
}

const root = document.querySelector("#root");
ReactDOM.render(<Hello name="Billy" />, root);
