import React from "react";
import CityImage from "./CityImage";
import "../App.css";

const City = [
  {
    Praga: 'http://path-to-praga-image.jpg',
    Boston: 'http://path-to-boston-image.jpg',
  }
]
class Destiny extends React.Component {
  selectListener(event) {
    alert(`Tu destino es viajar a ${event.target.value}`);
  }

  render() {
    return (
      
    );
  }
}

export default Destiny;
