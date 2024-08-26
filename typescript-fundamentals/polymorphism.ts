import { Shape, Circle, Rectangle, Cube } from "./abstraction";

let circle: Circle = new Circle(5);

console.log(circle);

//circle = new Rectangle(5, 4);

// circle = new Cube(5);

console.log("------------------------------------------------");

let shape: Shape;

shape = new Rectangle(5, 4);
console.log(shape);

shape = new Circle(5);
console.log(shape);

shape = new Cube(5);
console.log(shape);


console.log("------------------------------------------------");

let shapes: Shape[] = [
    new Rectangle(5, 4),
    new Circle(5),
    new Cube(5)
];

console.log(shapes);
