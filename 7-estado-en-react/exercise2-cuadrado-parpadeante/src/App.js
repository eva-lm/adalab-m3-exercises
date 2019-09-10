import React from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      color: prevState.color === "blue" ? "red" : "blue"
    }));
  }
  render() {
    return (
      <div
        className={`Square ${this.state.color}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default App;
