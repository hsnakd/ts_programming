export class Person {

  name: string;
  age: number;
  gender: string;
  employed: boolean;

  constructor(name: string, age: number, gender: string,employed: boolean){
    // initialize all instance variables
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.employed = employed;
  }

}

export function displayMessage(message: string){
    console.log(message);
}

//let person1 = new Person("John Doe", 30, "Male", true);
//console.log(person1);