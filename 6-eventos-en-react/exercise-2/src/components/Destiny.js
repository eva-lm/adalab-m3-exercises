import React from "react";
import "../App.css";

class Destiny extends React.Component {
  render() {
    return (
      <div>
        <header></header>
        {label};{select};
      </div>
    );
  }
}
const label = <label for="cities">Selecciona tu ciudad</label>;

const select = (
  <select name="select">
    <option value="value1">Buenos Aires</option>
    <option value="value2" selected>
      Sydney
    </option>
    <option value="value3">Praga</option>
    <option value="value4" selected>
      Boston
    </option>
    <option value="value5">Tokio</option>
  </select>
);

export default Destiny;
