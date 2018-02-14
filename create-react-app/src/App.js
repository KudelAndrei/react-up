import React, { Component } from 'react';
import Todo from "./components/Todo.jsx";
import Header from './components/Header.jsx';
import "./style.css";

import PropTypes from "prop-types";

class App extends Component{
  constructor(props){
    super(props);

    this.state = { 
      todos: this.props.initDate,
      
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleDelete = this.onHandleDelete.bind(this);
  }

  onHandleChange(id){
    let todos = this.state.todos.map(todo => {
      if (todo.id === id){
        todo.complited = !todo.complited;
      }
      return todo;
    });

    this.setState({ todos });
  }

  onHandleDelete(id){
    let todos = this.state.todos.filter(todo => todo.id !== id );
    this.setState({ todos });
  }

  render(){
    return (
      <main className="form">
        <Header title="React ToDo" />
        <section className="todo-lists">
          {this.state.todos.map(todo =>
            <Todo 
              key={todo.id}
              id={todo.id}
              title={todo.title} 
              complited={todo.complited}
              handleChange={this.onHandleChange}
              onDelete={this.onHandleDelete}
            />
          )}
        </section>
      </main>
    );
  }
}

App.propTypes = {
  initDate: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired
  })).isRequired
}

export default App;
