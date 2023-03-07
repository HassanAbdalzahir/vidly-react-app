import React, { Component } from "react";
class Counter extends Component {
  formatCount = () => {
    if (this.props.counter.value === 0)
      return <span className="badge text-bg-warning">Zero</span>;
    return (
      <span className="badge bg-primary fs-8">{this.props.counter.value}</span>
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">{this.formatCount()}</div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm col m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm col m-1"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2 col"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
