import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            id={counter.id}
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
