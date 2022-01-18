import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import "./assets/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "primereact/resources/themes/nova-light/theme.css";
import "./assets/custom-theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/custom.css";
const log = console.log.bind(console, ">>");
window.console.log = log;

// to hide console in prod
if (process.env.NODE_ENV !== "development") console.log = () => {};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
