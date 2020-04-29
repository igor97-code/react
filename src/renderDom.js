import "./css/styles.scss";
import React, {Component} from "react";
import ReactDom from "react-dom";
import App from "./components/app.js"


function RenderingDom(State) {
    ReactDom.render(<App store={State} />, document.getElementById("root"));
}
export {RenderingDom};