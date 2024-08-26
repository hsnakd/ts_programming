export abstract class Shape {

  name!: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract calculateArea(): number;

  abstract calculatePerimeter(): number;
}

export interface Volume {
  calculateVolume(): number;
}

export class Rectangle extends Shape {
  width!: number;
  length!: number;

  constructor(width: number, length: number){
    super("Rectangle");
    this.width = width;
    this.length = length;
  }

  calculateArea(): number {
    return this.width * this.length;
  }
  calculatePerimeter(): number {
    return (this.width + this.length) * 2;
  }
}

export class Circle extends Shape {
  radius!: number;

  constructor(radius: number){
    super("Circle");
    this.radius = radius;
  }

  calculateArea(): number {
    return this.radius * this.radius * Math.PI;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Cube extends Shape implements Volume {
  side!: number;

  constructor(side: number){
    super("Cube");
    this.side = side;
  }

  calculateArea(): number {
    return 6 * this.side * this.side;
  }

  calculatePerimeter(): number {
    return 12 * this.side;
  }

  calculateVolume(): number {
    return this.side * this.side * this.side;
  }
}
