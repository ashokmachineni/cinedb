import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
//http://react-cinedb-dev.s3-website-us-east-1.amazonaws.com

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React Redux setup finished</h1>
      </div>
    </Provider>
  );
};

export default App;
