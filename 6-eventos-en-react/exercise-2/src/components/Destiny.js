import React from "react";
import "../App.css";

class Destiny extends React.Component {
  selectListener(event) {
    alert(`Tu destino es viajar a ${event.target.value}`);
  }

  render() {
    return (
      <div>
        {label}
        <select name="select" onChange={this.selectListener}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
      </div>
    );
  }
}
const label = <label for="cities">Selecciona tu ciudad </label>;

export default Destiny;
