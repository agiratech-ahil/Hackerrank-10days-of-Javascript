class Polygon {
  constructor(s) {
    this.side = s;
  }
  perimeter() {
    let p = 0;

    for (let i = 0; i < this.side.length; i++) {
      p += this.side[i];
    }
    return p;
  }
}
