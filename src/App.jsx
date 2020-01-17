import React, { Component } from "react";
import Stock from "./components/Stock";
import Review from "./components/Review";
//import Test from "./Test";

import "./style/style.css";
import info from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = info;
  }

  render() {
    return (
      <div className="app">
        <Stock cardInfo={this.state.first} />
        <Review cardInfo={this.state.second} />
      </div>
    );
  }
}
export default App;
