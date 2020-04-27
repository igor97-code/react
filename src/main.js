import "./css/styles.scss";
import React, {Component} from "react";
import ReactDom from "react-dom";
import State from "./state/state.jsx";
import {addPost} from "./state/state.jsx";
import App from "./components/app.js"



 ReactDom.render(<App state = {State} addPost = {addPost}/>, document.getElementById("root"));