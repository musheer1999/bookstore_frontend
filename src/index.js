import React from "react";
// import ReactDOMServer from 'react-dom/server';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import C from "./resource/values";
//
// let components = ReactDOMServer.renderToString(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// ReactDOM.hydrate(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
axios.defaults.baseURL = C.SERVER_CALL;
ReactDOM.render(
  <React.StrictMode>
   <App />
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
