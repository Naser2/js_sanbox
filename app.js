console.log(123);
console.log("Hello world2");
console.log(true);
console.log([1,2,3,4,5]);
var greeting = "Hello"
console.log(greeting);
console.log({a:1, b:2});
console.table({a:1, b:2});
// console.error('This is an error message');
// console.clear();
console.warn('this is a warning');
let a = {c:6} 

console.time('hello');
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.timeEnd('hello');


let name;
    name = "John Doe";
    console.log(name);

    name = 'Valerie Simpson';
    console.log(name);

// let name;
// console.log(name2);
// name = "Jhonson";
// console.log(name);
// name = "Jamie";
// console.log(name);

const person = {
  firstName: 'Ben',
  age: 30
}
console.log(person);
  person.firstName = 'Sara';
  person.age = 35;
console.log(person);

const numbers = [1,2,3,4,5];
      numbers.push(9);
      console.log(numbers);
      numbers.unshift(8);
      console.log(numbers);
      numbers.shift() // will remove first item
      console.log(numbers);


// PRIMITIVE TYPES

  const firstName = "Ben";
  console.log(typeof firstName);
  // string
  const age = 20;
  console.log(typeof age);
  // number
  const car = null;
  console.log(typeof car);
  //undifined

  let test;
  // Symbol
  const hasKids = true;
  console.log(typeof true);
  //Boolean


// REFFERENCE TYPES OBJECTS 

//Array
const hobbies = ['jog', 'music', 'movies'];
console.log(typeof hobbies);
 
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof address);
// Object Literal

const today = new Date();
console.log(today);
console.log(typeof today);
//Object 

