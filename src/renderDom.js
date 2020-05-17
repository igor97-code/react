import "./css/styles.scss";
import React, {Component} from "react";
import ReactDom from "react-dom";
import Store from "./state/ReduxStore";
import App from "./components/app.js"


function RenderingDom(State) {
    ReactDom.render(<App store={Store.getState()} dispatch = {Store.dispatch}/>, document.getElementById("root"));
}
Store.subscribe(RenderingDom);
export {RenderingDom};