import React, { Component } from "react";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(value) {
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  
  render() {
    let list = this.state.list.map((el, i) => {
      return <Todo key={i} list={el} />
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.input} onChange={e => this.handleChange(e.target.value)} placeholder='Enter new task' type="text"/>
          <button onClick={this.handleAddTask}>Add</button>   
        </div>
        {list}
        
      </div>
    );
  }
}

export default App;
