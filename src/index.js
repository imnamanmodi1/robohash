import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList";
import "./styles.css";
import { robots } from "./robots";

ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
