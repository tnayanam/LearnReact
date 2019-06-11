import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  render() {
    return (
      <React.Fragment>
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
        {/* since we are using function reference this.handleIncrement so we cannot pass argument, in order to pass argument we would need to do things differetly coz we cannot use this.handleIncrement (some value) */}
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
