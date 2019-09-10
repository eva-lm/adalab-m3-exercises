import React from "react";
<CityImage city="Praga" />;

class CityImage extends React.Component {
  render() {
    return (
      <div>
        <CityImage city="Praga" />
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

export default CityImage;
