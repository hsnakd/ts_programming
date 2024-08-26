
function addition(a: number, b: number, c: number = 0): number{
    return a + b + c;
}

let result = addition(10, 20);

console.log(result);
console.log(typeof result);


let result2 = addition(100, 200, 300);
console.log(result2);


function greetings(message: string = "Hi, How are you?"){
  console.log(message);
}


greetings();

greetings("Hello everyone, Hope you are having a great time!")

//greetings(1000);

