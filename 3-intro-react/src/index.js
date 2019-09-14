import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MediaCard from "./components/MediaCard";
//import * as serviceWorker from "./serviceWorker";
import image from "./images/emoji.png";
import "./stylesheets/style.scss";

const componentToRender = (
  <MediaCard
    name="MariCarmen"
    date="Lunes 3 de junio de 2019"
    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec."
    image={image}
  ></MediaCard>
);

ReactDOM.render(componentToRender, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
