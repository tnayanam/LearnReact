import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {

    const {onReset, onDelete, onIncrement, counters, onDecrement } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="bt btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

/* Differece between props and state 
prop is properties that is passed to a component and it cannot be altered.
in this example counters.jsx passed property to counter component, where as the state is local to a counter. so if you want to alter a prop in a counter you need to set it to a state and then change it.

*/
