import React from "react";
import ReactDOM from "react-dom";
import Tickers from "./components/Tickers.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Cryptocurrency Ticker</h2>
      </div>
      <Tickers />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
