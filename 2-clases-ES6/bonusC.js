class Polygon {
    constructor (numberSide, height, base) {
        this.numberSide = numberSide;
        this.height = height;
        this.base = base;
    }
    perimeter() {
        const perimeter = this.side * this.numberSide;
        console.log(perimeter);
      }
      area() {
        const area = this.side * this.side;
        console.log(area);
      }
}

class Square extends Polygon {
    constructor (side) {
        super(4, side, side)
    }
}
class Triangle extends Polygon {
    constructor (3, )
}