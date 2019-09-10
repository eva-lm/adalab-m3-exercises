import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleClick}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
