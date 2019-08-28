import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleChange(filter) {
    this.setState({userInput: filter})
  }
  
  render() {
    let foodsToDisplay = this.state.foods
    .filter((el, i) => {
      return el.includes(this.state.userInput)
    })
    .map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })
    return(
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}type="text"/>
        <p>{foodsToDisplay}</p>
      </div>
    )
  }
}

export default App;
