import React, { Component } from "react";
import { ITodo } from "../models/ITodo";

interface TodoItemPropType {
  todo: ITodo;
  markComplete: any;
  delTodo: any;
}

export default class TodoItem extends Component<TodoItemPropType, any> {
  btnStyle = {};

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      marginBottom: "5px",
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={{
              background: "#ff0000",
              color: "#fff",
              padding: "5px 8px",
              borderRadius: "50%",
              cursor: "pointer",
              float: "right",
            }}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
