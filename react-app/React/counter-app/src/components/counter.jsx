import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span
          style={{ fontSize: 10, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
       
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

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

// event is getting triggered from the child component (counter.jsx delete button) but they will be handlede in the main counters.jsx.
