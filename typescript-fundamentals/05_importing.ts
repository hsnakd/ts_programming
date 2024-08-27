import { Person, displayMessage } from "./04_class-object";
import { Item } from "./06_encapsulation";

let person = new Person("Daniel", 40, "Male", true);
console.log(person);

displayMessage("Hello, I am Daniel!");

let item = new Item("Pen", 25);

console.log(item);

//item.setItemPrice(-10);
//console.log(item);