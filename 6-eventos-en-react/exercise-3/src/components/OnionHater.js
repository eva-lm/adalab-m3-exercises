import React from "react";
//import logo from "./logo.svg";
import "../App.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const select = event.target.value;
    if (select.includes("cebolla")) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }
  render() {
    if (this.isHating === true) {
      return (
        <div className="textHater">
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            onChange={this.handleClick}
            placeholder="Escribe algo aquí..."
          ></textarea>
        </div>
      );
    } else {
      return (
        <div>
          <textarea
            name="textarea"
            rows="10"
            cols="50"
            onChange={this.handleClick}
            placeholder="Escribe algo aquí..."
          ></textarea>
        </div>
      );
    }
  }
}
/*     const select = event.target.value;
    if (select.includes("cebolla")) {
      //alert("ODIO LA CEBOLLAAAA!!!");

    } else {
      document.body.classList.remove("textHater");
      document.body.classList.add("container");
    }
  }
 */

export default OnionHater;
