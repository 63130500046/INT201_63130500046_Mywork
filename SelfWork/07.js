//test fact
let fact = function factorial(n) {
    console.log(n);
    if(n<=1){
        return 1;
    }
    return n * factorial(n-1);
}
fact(5);
//simple function

function area(width, height) {

    return width * height;
  
  }
  console.log(area(5, 4));


//arrow function

let a = 4;
let b = 7;


//1.
function helloSomeone(name){
    return `Hello, ${name}`;
}
const helloSomebody = (name) => `Hello, ${name}`;

console.log(helloSomebody('Bee'));
//2.
area = (width , height) => width*height;

console.log(area(8,9));
//3.
 evenNum = (num) => (num % 2 === 0 );

console.log(evenNum(20));


function printStudents(students) {
    let result = '';
    // iterate through arguments
    let separator = arguments[0];
    for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
    }
    return result;
    }
    
console.log(printStudents('.', 'Adam', 'John', 'Danai'));
// Adam.John.Danai.