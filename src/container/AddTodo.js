import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  //   console.log(dispatch);
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // console.log(input.value);
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <input type="text" ref={ref => (input = ref)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect()(AddTodo);
