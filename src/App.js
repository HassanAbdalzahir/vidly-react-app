import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
// import Counters from "./components/counters";
import NavBar from "./components/common/navbar";
import Movies from "./components/movies";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 60 },
      { id: 3, value: 22 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value >= 1).length}
        />
        <main className="container my-5 row">
          {/* <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
          /> */}
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
