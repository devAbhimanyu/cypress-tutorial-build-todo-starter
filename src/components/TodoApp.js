import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { saveTodo } from "../lib/service";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newItem: "",
      error: false,
    };
    this.newItemOnChange = this.newItemOnChange.bind(this);
    this.newTodoSubmit = this.newTodoSubmit.bind(this);
  }

  newItemOnChange(e) {
    const { value } = e.target;
    this.setState({
      newItem: value,
    });
  }

  newTodoSubmit(e) {
    e.preventDefault();
    const newItem = { desc: this.state.newItem, isComplete: false };
    saveTodo(newItem)
      .then(({ data }) => {
        const { todos } = this.state;
        const newTodo = todos.concat(data);
        this.setState({
          todos: newTodo,
          newItem: "",
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          newItem: "",
        });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.error && <span className="error">Not working</span>}
            <TodoForm
              changeDelegate={this.newItemOnChange}
              value={this.state.newItem}
              submitDelegate={this.newTodoSubmit}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
