import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  constructor() {
    super() 
    
    this.state = {
      tasks: []
    }
  }
  
  updateTasks = (task) => {
    this.setState({tasks: [...this.state.tasks, task]})
  }

  render() {
    return (
      <div className="App">
        <NewTask updateTasks={this.updateTasks}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
