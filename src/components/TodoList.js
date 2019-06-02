import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  // console.log(todos);
  return (
    <React.Fragment>
      {todos.length > 0 ? (
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          ))}
        </ul>
      ) : (
        "No Todo Left"
      )}
    </React.Fragment>
  );
};

export default TodoList;
