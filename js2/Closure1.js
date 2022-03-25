// In other words, a closure gives you access to an outer function's scope from an inner function.

// function printFullName(firstName, lastName) {
//   function printName() {
//     console.log(firstName, lastName);
//   }
//   return printName;
// }
// const ans = printFullName("raj", "p");
// console.log(ans);
// ans();

function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}

const myFunction = (power) => (number) => number ** power;

const square = myFunction(2);
const ans1 = square(3);
console.log(ans1);
