import React, { Component } from 'react';
import Todo from "./components/Todo.jsx";
import Header from './components/Header.jsx';
import Stats from "./components/Stats";
import Form from "./components/Form";
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
    this.onFormAdd = this.onFormAdd.bind(this);
    this.onHndleSave = this.onHndleSave.bind(this);
  }

  onId(){
    this._prevId = this._prevId || 4;
    return this._prevId++;
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

  onFormAdd(title){
    let todo = {
      id: this.onId(),
      title,
      complited: false
    };

    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  onHandleDelete(id){
    let todos = this.state.todos.filter(todo => todo.id !== id );
    this.setState({ todos });
  }

  onHndleSave(id, title){
    let todos = this.state.todos.map(todo => {
      if(todo.id ===  id){
        todo.title = title;
      }
      return todo;
    });
    this.setState({ todos });
  }

  render(){
    return (
      <main className="form-wrap">
        <Header title="React ToDo" />
        <Form formAdd={this.onFormAdd} />
        <section className="wrap">
          <section className="todo-lists">
            {this.state.todos.map(todo =>
              <Todo 
                key={todo.id}
                id={todo.id}
                title={todo.title} 
                complited={todo.complited}
                handleChange={this.onHandleChange}
                onDelete={this.onHandleDelete}
                handleSave={this.onHndleSave}
              />
            )}
          </section>
          <Stats todos={this.state.todos} />
        </section>
      </main>
    );
  }
}

App.propTypes = {
  initDate: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired
  })).isRequired,
}

export default App;
