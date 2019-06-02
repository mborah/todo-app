// import React from "react";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";
import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";

const VisibleTodoList = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: VisibleTodoList(state.todos, state.visibilityFilters)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
