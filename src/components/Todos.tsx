import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../models/ITodo";

interface TodosProps {
  todos: ITodo[];
  markComplete: Function;
  delTodo: Function;

}

export default class Todos extends Component<TodosProps, any> {
  render() {
    return this.props.todos.map((todo: any) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
