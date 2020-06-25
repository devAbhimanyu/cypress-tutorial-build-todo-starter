import React from "react";

export default ({ changeDelegate, value }) => (
  <form>
    <input
      type="text"
      data-e2e="newTodo-item"
      className="new-todo"
      autoFocus
      placeholder="What needs to be done?"
      onChange={changeDelegate}
      value={value}
    />
  </form>
);
