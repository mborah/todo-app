const initialState = [
  {
    id: 0,
    text: "something",
    completed: false
  }
];

const todos = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      return (
        // console.log(action.text),
        [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      );
    case "TOGGLE_TODO":
      return (
        console.log("TOGGLE_TODO"),
        state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    default:
      return state;
  }
};

export default todos;
