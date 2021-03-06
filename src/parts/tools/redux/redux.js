import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  let todoRef;

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const _handleNewTodo = (e) => {
    let newTodo = todoRef.value;
    dispatch({
      type: "ADD TODO",
      todo: newTodo,
    });
    e.preventDefault();
    todoRef.value = "";
  };

  return (
    <div className="App App-header">
      <div> Todo List</div>

      <form onSubmit={_handleNewTodo}>
        <label>
          {" "}
          New todo <input ref={(input) => (todoRef = input)} />
        </label>
      </form>

      <ul>
        {" "}
        {todos.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
