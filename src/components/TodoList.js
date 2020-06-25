import React from "react";

const TodoItem = ({ desc }) => (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{desc}</label>
      <button className="destroy" />
    </div>
  </li>
);

export default (props) => (
  <ul data-e2e="todo-list" className="todo-list">
    {props.todos.map((todo) => (
      <TodoItem key={todo.id} desc={todo.desc} />
    ))}
  </ul>
);
