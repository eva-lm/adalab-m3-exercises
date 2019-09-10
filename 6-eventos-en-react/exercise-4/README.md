JERCICIO 4
Visualiza tu destino
Vamos a partir del ejercicio 2 sobre elegir tu destino. Vamos a crear un nuevo componente CityImage que muestra una imagen de una ciudad que recibe por props. Por ejemplo
<CityImage city="Praga" />
Debe mostrar una imagen de Praga. Para facilitar este comportamiento, este componente debe tener como uno de sus atributos un objeto literal con el formato:
{
  'Praga': 'http://path-to-praga-image.jpg',
  'Boston': 'http://path-to-boston-image.jpg',
  ...
}
Una vez que tenemos este componente funcionando, vamos a crear uno como hija de nuestro componente Destiny, es decir, vamos a hacer que Destiny contenga un CityImage. Para eso vamos a pintarlo en el JSX de su render.
Para terminar, vamos hacer que la magia suceda: en vez de hacer un alert, cuando la usuaria elija una ciudad en el select aparece la imagen de esa ciudad y se muestra el texto 'Tu destino es viajar a XXX'. Para conseguirlo os recomendamos usar un atributo de la clase this.city que cambie su valor al cambiar el select. También tendremos que usar forceUpdate para se ejecute el método render y a) se pasen unas props diferentes al componente CityImage y b) se pinte una ciudad diferente en el título.
