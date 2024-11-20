import React from "react";

// Define state and action types
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoState = {
  todos: Todo[];
};

type TodoAction =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "remove"; id: number };

// Reducer function
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "add":
      console.log("add done");
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false },
        ],
      };

    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case "remove":
      return { todos: state.todos.filter((todo) => todo.id !== action.id) };

    default:
      throw new Error("Unknown action type");
  }
};

class TodoApp extends React.Component<{}, TodoState> {
  state = { todos: [] };

  dispatch = (action: TodoAction) => {
    this.setState((prevState) => todoReducer(prevState, action));
  };

  handleAdd = () => {
    const text = prompt("Enter a to-do:");
    if (text) {
      this.dispatch({ type: "add", text });
    }
  };
  handleRemove = (id: number) => {
    this.dispatch({ type: "remove", id });
  };
  handleToggle = (id: number) => {
    this.dispatch({ type: "toggle", id });
  };
  render(): React.ReactNode {
    return (
      <div>
        <h1>To-Do List</h1>
        <button onClick={this.handleAdd}>Add the Text</button>
        <ul>
          {this.state.todos.map((todo: Todo) => (
            <li>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "None",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => {
                  this.handleRemove(todo.id);
                }}
              >
                Remove
              </button>
              <button onClick={() => this.handleToggle(todo.id)}>
                Mark as {todo.completed ? " Undone" : " Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
