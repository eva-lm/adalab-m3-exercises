import React from "react";
import "../stylesheets/App.css";

class Form extends React.Component {
  //estado inicial
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.fileInput = React.createRef();
  }
  //evento
  handleClick(event) {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>Información de la película</h2>
        <label htmlFor="title">Nombre: </label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.handleClick}
        />
        <label htmlFor="description">Descripción: </label>
        <textarea
          id="description"
          rows="10"
          cols="50"
          value={this.state.description}
          onChange={this.handleClick}
        >
          Descripción de la película
        </textarea>
        <label htmlFor="language">Idioma: </label>
        <select id="language" onChange={this.handleClick}>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
        <label>Carátula película: </label>
        <input type="file" name="upload" ref={this.fileInput}></input>
        <input type="submit" value="Enviar" />
        <div>
          <h2>Tarjeta de previsualización </h2>
          <h4>Título</h4>
          <p>{this.state.title}</p>
          <h4>Descripción: </h4>
          <p>{this.state.description}</p>
          <h4>Idioma seleccionado</h4>
          <p>{this.state.language}</p>
          <div className="preview">{this.state.fileInput}</div>
        </div>
      </form>
    );
  }
}
export default Form;
