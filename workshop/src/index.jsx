import "../assets/stylesheets/application.scss";

import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  const { name } = props;
  return <h1>Ayoooo {name}</h1>;
};

const root = document.querySelector("#root");
ReactDOM.render(<Hello name="Billy" />, root);
