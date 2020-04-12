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
/*
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
    return [`age: ${age}`, `retirement:  ${65 - age}`];
}

const[age2, retirement] = calcAgeRetirement(1977);
console.log(age2, retirement);
*/
/*
///////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

// remember, querySelectorAll returns a nodelist, not an array. So we have to turn it into an array.

// ES5
  var boxesArr5 = Array.prototype.slice.call(boxes);
  boxesArr5.forEach(function(current) {
      current.style.backgroundColor = 'dodgerblue';
  });

// and then if we want to change the words in the boxes, we have to use a for loop....

for (let i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    } else {
        boxesArr5[i].textContent = 'I changed to blue';
    }
}

// ES6 - leverages the new 'from method for arrays'
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');

// even shorter.....
// Array.from(boxes).forEach(current => current.style.backgroundColor = 'dodgerblue');

// and now instead of a for loop, we have the for (..of..)
for (const box of boxesArr6) {
    if (box.className.includes('blue')) {
        continue;
    } else {
        box.textContent = 'I changed to blue';
    }
}


// findIndex method
let ages = [12,18,8,22,14,11];
let ofAge = ages.findIndex(cur => cur >= 21);
console.log(ofAge);

// find method
console.log(ages.find(cur => cur >= 21));
*/
/*
////////////////////
// Lecture: Spread Operator

function addFourAges(a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);

// ES6
// the spread operator(...) spreads out the elements of the array to be used by the addFourAges function

const sum3 = addFourAges(...ages);
console.log(sum3);

// the spread operator can also be used to join arrays together (and add an element in the middle)
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// it can also be used on a nodelist

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(el => el.style.color = 'purple');
*/
/*
//////////////////////
// Lecture: Rest Parameters

// ES5
function isFullAge5(limit, age) {
    var argsArr = Array.prototype.slice.call(arguments,1);

    argsArr.forEach(function(year) {
        console.log((2020 - year) >= limit);
    });
    console.log(argsArr);
}

console.log(isFullAge5(31, 1990, 1999, 1965, 2016, 1987));

// ES6
// ... in this case captures the arguments into an array called years. Then forEach parses the array into console.log using year for each element in the array)
function isFullAge6(limit, ...years) {
    years.forEach(year => console.log((2020 - year) >= 31));
    console.log(years);
}
console.log(isFullAge6(21, 1990, 1999, 1965, 2016, 1987));
*/
/*
/////////////////////
// Lecture: Default Parameters

//ES5
// creating a SmithPerson and using some defaults if values are blank (lastName, nationality)
function SmithPerson(firstName, yOB, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yOB = yOB;
    this.nationality = nationality;
}

var John = new SmithPerson('John', 1990);
console.log(John);

var Emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(Emily);

// ES6

function SmithPerson2(firstName, yOB, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yOB = yOB;
    this.nationality = nationality;
}
*/
/*
/////////////////////
// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JS version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('answer', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer. Please try again.');


// get allows you to retrieve a value from the hash map using it's key.
// console.log(question.get('question'));


if (question.has(4)) {
    // question.delete(4); // deletes the value with the key 4.
    // console.log('Answer 4 is here');
}
// question.clear() // clears out the question map

// hash maps are iterable, meaning you can use forEach and map and loops to pull out data.
// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question) {
    console.log(`This is ${key} and it's set to ${value}`);
}
console.log('\n');
for (let [key, value] of question.entries()) {
    console.log(`This is ${key} and it's set to ${value}`);
}

console.log('\n');

console.log(question);

console.log(question.get('question'));
for (let [key, value] of question) {
    if (typeof(key) === 'number') {
        console.log(`Option ${key}: ${value}`);
    }
}
// console.log(`The answer is: ${question.get('answer')}`);

const answer = parseInt(prompt('Write the correct answer'));

// answer === question.get('answer')
// this will either return true or false based on the ===. so then you take that and put it in the question.get() and it will return the string that matches to either the true or false value.

console.log(question.get(answer === question.get('answer')));

// why hash maps are better (summary)
// 1. they can use anything for keys...strings, numbers, boolean
// 2. they are iterable and so you can read through them and manipulate data with them
// 3. you can easily get the size of the map you use map.size()
*/
/*
///////////////////
// Lecture: Classes


// ES5
var Person5 = function(name, yOB, job) {
    this.name = name;
    this.yOB = yOB;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yOB;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');
console.log(john5);

// ES6
// NOTES
// 1. every class has to have the constructor part. It serves to define the values that this class will have when created.
// 2. classes are not hoisted like in Functions
// 3. we can only add methods to classes, not properties.


class Person6 {
    constructor (name, yOB, job) {
        this.name = name;
        this.yOB = yOB;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yOB;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
console.log(john6);

Person6.greeting();
*/
/*
//////////////////
// Lecture: Classes with Subclasses

// ES5

// Person5 is the superclass and defines the Person5 object
var Person5 = function(name, yOB, job) {
    this.name = name;
    this.yOB = yOB;
    this.job = job;
};

// this adds a method to the object that is inherited by any Person5 object.
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yOB;
    this.age = age;
    //    console.log(age);
};

// Athlete5 is the subclass, which inherits the methods from Person5, like calculateAge
var Athlete5 = function(name, yOB, job, olympicGames, medals) {
    Person5.call(this, name, yOB, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

// this creates an Athlete object that pulls in the methods from Person5 class
Athlete5.prototype = Object.create(Person5.prototype);

// this adds a method to the Athlete5 subclass that can be used by any Athlete subclass.
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    //    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
console.log(johnAthlete5);

// ES6
// this defines the super class
class Person6 {
    constructor(name, yOB, job) {
        this.name = name;
        this.yOB = yOB;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yOB;
        this.age = age;
    }
}
// this is the subclass. Notice we use the super to refer to the superclass and not "this"
class Athlete6 extends Person6 {
    constructor(name, yOB, job, olympicGames, medals) {
        super(name, yOB, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
    }
}

const mikeAthlete6 = new Athlete6('Mike', 1985, 'diver', 5, 9);
mikeAthlete6.wonMedal();
mikeAthlete6.calculateAge();
console.log(mikeAthlete6);
*/
