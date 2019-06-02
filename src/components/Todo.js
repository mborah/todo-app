import React from "react";

const Todo = ({ text, completed, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "" }}
    >
      {text}
    </li>
  );
};

export default Todo;
