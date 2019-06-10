import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.formatCount()}</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
