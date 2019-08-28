import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      foodList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  
  render() {
    let foodsToDisplay = this.state.foodList.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })
    return <div className="App">{foodsToDisplay}</div>
  }
}

export default App;
