import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App/App";
import { Provider } from "react-redux";
import configureStore from "./store";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//   <Provider store={configureStore()}>
//   <App />
// </Provider>,
// document.getElementById("root")
  // <React.StrictMode>
  <Provider store={configureStore()}>
  <App />
 </Provider>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
