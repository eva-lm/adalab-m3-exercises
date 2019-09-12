import React from "react";
import "../App.css";

class App extends React.Component {
  //estado inicial
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handTextArea = this.handTextArea.bind(this);
    this.handSelectLanguage = this.handSelectLanguage.bind(this);
  }
  //evento
  handleClick(event) {
    this.setState({
      name: event.target.value
    });
  }
  handTextArea(event) {
    this.setState({
      description: event.target.value
    });
  }
  handSelectLanguage(event) {
    this.setState({
      language: event.target.value
    });
  }
  render() {
    return (
      <form>
        <h2>Información de la película</h2>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.handleClick}
        />
        <label htmlFor="description">Descripción: </label>
        <textarea
          name="description"
          rows="10"
          cols="50"
          value={this.state.description}
          onChange={this.handTextArea}
        >
          Descripción de la película
        </textarea>
        <label htmlFor="language">Idioma: </label>
        <select name="language" onChange={this.handSelectLanguage}>
          <option value="Spanish">Español</option>
          <option value="English">Inglés</option>
          <option value="Portuguese">Portugués</option>
        </select>

        <input type="submit" value="Enviar" />
        <div>
          <h2>Tarjeta de previsualización </h2>
          <h4>Título</h4>
          <p>{this.state.name}</p>
          <h4>Descripción: </h4>
          <p>{this.state.description}</p>
          <h4>Idioma seleccionado</h4>
          <p>{this.state.language}</p>
        </div>
      </form>
    );
  }
}
export default App;
