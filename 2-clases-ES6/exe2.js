/* EJERCICIO 2
Vamos a mejorar nuestra calculadora geométrica sencilla. En el programa definiremos la clase Square, que tendrá al menos:
Un atributo para la longitud del lado (side) del cuadrado
Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados - 4)
Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias. */

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    const perimeter = this.side * 4;
    console.log(perimeter);
  }
  area() {
    const area = this.side * this.side;
    console.log(area);
  }
}
const newSquare = new Square(2);

newSquare.perimeter();
newSquare.area();
