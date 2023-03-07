import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters, onDecrement } =
      this.props;

    return (
      <div>
        {counters.length === 0 ? null : (
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            RESET
          </button>
        )}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h4>
              Counter ={">"} {counter.id}
            </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
