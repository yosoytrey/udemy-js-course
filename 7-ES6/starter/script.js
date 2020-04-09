/*jshint esversion: 6 */

/*
////////////////////////
 Lecture: let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

// ES5

function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive.');
}
driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
//  console.log(firstName);
    let firstName = 'John';
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'Joey';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive.');
}
driversLicense6(true);
*/
/*
//////////////////////////////
// Lecture: Blocks and IIFEs

// ES6 - how to write an IIFE without having to use the ES5 way.
{
    const a = 1;
    let b = 2;
}
// console.log(a, b) // throws an error because it's out of the block scope {}

// ES5 way
(function() {
    var c = 3;
})();
console.log(c); // throws an error because it's in a private IIFE
*/
/*
/////////////////////////////////
// Lecture: Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(n.startsWith('J'));
console.log(`${firstName} `.repeat(5));
*/
/*
////////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1985, 1977, 1937];

// ES5

var ages5 = years.map(function(el) {
    return 2020 - el;
});
console.log(ages5);

// ES6
// with just one argument of (current, index, array), you can use a simple version of arrow functions
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// if you want to use two of the three (current, index, array), then you need to use () around the variables (el, index)
ages6 = years.map((el, index) => `Age element ${index +1}: ${2020 - el}`);
console.log(ages6);

// if your function has more than one line of code, you need to use the {} and the keyword 'return'.
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index +1}: ${age}.`;
});
console.log(ages6);
*/
/*
/////////////////////////////////////
// Lecture: Arrow Functions 2

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var string = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(string);
        });
    }
};
 box5.clickMe();
*/
/*
// ES6
// The arrow function can use the 'this' keyword from the contaiiner its in. In this case, the var box6. Remember, this is used to represent the function it's actually in. Now you can abstract one level.

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var string = `This is box number ${this.position} and it is ${this.color}`;
            alert(string);
        });
    }
};
box6.clickMe();
*/
/*
// This doesn't work because you have two arrow functions, so that the 'this' keyword actually represents the values of the window object. Because that's what contains the var box66 object.

var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var string = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(string);
        });
    }
};
// box66.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends) {

    var array = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(array);
};

var friends = ['Chaika', 'Mina', 'Homi'];

// new Person('Johnny').myFriends5(friends);


// ES6

Person.prototype.myFriends6 = function(friends) {
    var array = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(array);
};

var friends = ['Chaika', 'Mina', 'Homi'];
new Person('Trey').myFriends6(friends);
*/

///////////////////////////////
// Lecture: Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name, age);

const object1 = {
    firstName: 'John',
    lastName: 'Smith'
};

const object2 = {
    firstName: 'Mina',
    lastName: 'Babina'
};

const {firstName, lastName} = object1;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = object2;
console.log(a,b);
console.log(object2);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 -age];
}

const[age2, retirement] = calcAgeRetirement(1977);
console.log(age2, retirement);
