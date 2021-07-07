// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {
  let ali = 'Ali';
  let yeahRightLol = 'Ali has a swollen ego'
  return function() {
    return (`Either ${ali} is the coolest person in the world, OR ${yeahRightLol}.`);
  }
}
let letsSee = closure();
console.log(letsSee());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  // Return a function that when invoked increments and returns a counter variable.
    let c = 0;
   return function() {
    c++;
    
    return c;
   } 
  }
  const MW = counter();
  console.log(MW(2));
  console.log(MW(3));
  

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    }
  };

const countFac = counterFactory();
console.log(countFac.increment()); 