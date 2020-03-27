/*
// functions returning functions
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


function retirement(retirementAge) {
    let a = ' years left until retirement.'

    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

// learning how to use the forEach method
var students = ['joe', 'mary', 'trey']

// function built into the forEach
students.forEach(function(student, i) {
  console.log('Student', i, 'is', student);
});


var printStudent = function(element, i) {
    console.log(`The student ${i} is ${element}`)
}

// forEach using a separate function: printStudent
students.forEach(printStudent);


// using all 3 values that come from forEach(item, index, arr)
// the below allows you to modify the original array.
// forEach doesn't normally return anything, it just calls a function on each element of an array.
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;

}
console.log(numbers)
*/
/*
// learning how to use slice array

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus)

// using slice backwards (or right to left)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
console.log(myBest)
*/

// the diff between map and forEach with examples
// https://codeburst.io/javascript-map-vs-foreach-f38111822c0f

// learning the map method. Map actually returns a new array of the same length.

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x)

// use forEach when you want to do something with the elements of an array.
let letters = ['a', 'b', 'c', 'd'];
letters.forEach((letter) => {
    console.log(letter);
});

// use map when you want to actually change or alter the data.

// What we’re doing below is first mapping over arr and multiplying every element in the array times 2. After this, we filter through the array and only save the elements that are greater than 5. This leaves us with a final arr2 of [6,8,10].

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
console.log(arr2)
