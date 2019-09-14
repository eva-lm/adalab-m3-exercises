import React from "react";

/* 
const emojiElement = (
  <span className="card__icon">
    <i class="fab fa-android"></i>
  </span>
); */

class MediaCard extends React.Component {
  render() {
    return (
      <header className="headerCard">
        <div className="card__media">
          <img src={this.props.image} className="card__image" alt="image" />
          <h1 className="title">{this.props.name}</h1>
          <p>{this.props.text}</p>
        </div>
      </header>
    );
  }
}

export default MediaCard;
