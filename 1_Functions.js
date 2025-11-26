add( 5 , 6);
function add(num1 , num2){
    const add = num1 + num2;
    return (console.log(add));
} // this are called the hoisted function where the each function is deaclare first and then is define after
// hoisted means it declare the some properties in the function and there some executable statement in the function block


const add1 = function(a, b) {
    return (console.log(a + b));
}; // this are the non-hoisted function which cannot works as the hoisted function

add1(5 , 5);


const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 4));

// Normal way to declare the function 

const add3 = (num1, num2) => num1 + num2; // It is an implict type of adn function where we 
console.log(add3(3, 4));  // know the our operation of one line and it does not need the return statement

const addNumber = (num1, num2) => ( // Here we use '()' instead of the brackerts '{}' 
    num1 + num2 // It is used where it does not need of the return statment 
);

console.log(addNumber(5, 6));

const object_Arrow = () => (
    {
        usernme: 'Girish'
    }
);

console.log(object_Arrow()); // Using the bracket {} we cannot use the object in that

const object_Curly = () => {
    const name = {
        username: 'Girish'
    }
}

console.log(object_Curly()); // It shows the output undefined    

// function one(){
//     console.log(this);
// }

// one();

// IIFE (Immediately Invoked Function Expression)

(function one() {
    console.log('DB Connected');

})(); // --> ';' is necessary for the termination of the Invoke of the IIFE function

((name) => {
    console.log(`Hello ${name}`);

})('Girish'); // It is unknown IIFE where it used a parameter 
 

// callback
console.log('Callback');

function greet(name , callback){
    console.log(name);
    callback();
    
}

function sayGoodBye(){
    console.log('GoodBye');
}

greet('Girish' ,sayGoodBye);

/// this are the callback which deals with where the one function is passed as the parameter to another function
// the callback works in the  'Function A → accepts callback B → executes B later'


let arr = [1, 2, 3];

arr.forEach(function (value) {
  console.log(value);
});

// for each element the loop or call the callback so every time it takes the callback  and execute the loop

// clouseres are those which remeber the variable of the outer scope even if the internal scope is executed

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    inner();
    inner();
    inner();
    inner();

}

outer();
// this are the clouseres where each inner scope function is remeber the outer scope variable

const obj = {
  name: "Girish",
  normal() { console.log(this.name); },
  arrow: (name) => console.log(this.name)
};

obj.normal(); // Girish
obj.arrow();  // undefined


// currying the function
function currying(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(currying(1)(2)(3)); // 6
// Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that take one argument at a time


let spreadArr = [1, 2, 3]; // this are the spread operator is used for the expand , unpack , extract the values from the array

console.log(Math.max(...spreadArr));


let restArr = [1, 2,3,4,5,6,7,8]; // here it is an example of the rest operator where it is used for the collecting the items
console.log(...restArr);

let {name , ...x} = {
    name : 'Girish',
    age : 21,
    gender  : 'Male'
};

// const restoper ={name , ...x};
// console.log(typeof restoper);
console.log((x)); 
