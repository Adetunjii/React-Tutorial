import React, { Component } from "react";

export default class AddTodo extends Component<any, any> {
  state = {
    title: "",
  };

  onChange = (e: any) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
