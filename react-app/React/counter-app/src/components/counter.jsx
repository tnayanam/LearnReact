import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 10, fontWeight: "bold" }}className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
      console.log("Increment button clicked", this);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
