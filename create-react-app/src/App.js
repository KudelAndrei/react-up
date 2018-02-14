import React, { Component } from 'react';
import Todo from "./components/Todo.jsx";
import "./style.css";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
