/*
Function constructor

let Person = function(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    thisjob = job
    }

Person.prototype.calculateAge =
function() {
    console.log(2016 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

let john = new Person('John', 1990, 'teacher')
let jane = new Person('Jane', 1969, 'designer')
let mark = new Person('Mark', 1948, 'retired')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName)
console.log(jane.lastName)
console.log(mark.lastName)
*/

/* Passing functions as arguments

let years = [1977, 1985, 1951, 1776, 2000]
function arrayCalc(arr, fn) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calculateAge(el) {
    return 2020 - el
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    }
}

let ages = arrayCalc(years, calculateAge)
console.log(ages)
let rates = arrayCalc(ages, maxHeartRate)
console.log(rates)
*/

/*
Fuctions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}
let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mike');

// or a simpler way to do it, is combine the two inputs. Because it is read from left to right, then the output of interviewQuestion('teacher') is a function that takes a name as a the input. So you can combine the two like you see below.

interviewQuestion('teacher')('Mica')
*/

/*
IIFE (Immediately Invoked Function Expressions)

function game() {
    let score = Math.random() * 10
    console.log(score >= 5)
}
game()

// or you can create an IIFE. You trick it by wrapping the function in parentheses. Why? Because in JS, what's in parentheses cannot be a declaration. So it views it as an expression, not a declaration.

(function() {
    let score = Math.random() * 10
    console.log(score >= 5)
})()

// You can also pass variables into an IIFE function. For example, passing goodLuck to increase the chance of it being true. We're passing a 5 in the last set of parentheses.

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 + goodLuck);
})(5)
*/


///// Closures
/*
function retirement(retirementAge) {
    let a = ' years left until retirement.'
	return function(yearOfBirth) {
		let age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

let retirementUS = retirement(66)
let retirementGermany = retirement(65)
let retirementIceland = retirement(67)

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// or combine the two inputs like below
// retirement(66)(1977)

// Rewriting the previous function using closures.

// Original
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

interviewQuestion('teacher')('Mike')

// Below is done using Closures

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?')
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

interviewQuestion('teacher')('John')
*/

// Bind, Call, and Apply

// Let's start with the Call method
/*
let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(`Good ${timeOfDay}, ladies and gentlemen. I'm ${this.name} and I'm ${this.age} years old.`)
        } else if (style === 'friendly') {
            console.log(`Hey, what's up? I'm ${this.name}, a ${this.job}, and I'm ${this.age} years old. Have a good ${timeOfDay}!`)
        }
    }
}

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon')
john.presentation('formal', 'morning')

// now let's look at the apply method

// john.presentation.apply(emily, ['friendly', 'afternoon'])

// The only difference between call and apply is that apply uses an array to capture the elements neeeded to pass into the function. The presentation function above is not built to accept an array, so technically this won't work as is.

// The Bind Method
// This allows a function to be created with some inputs pre-set in another function. For example, in johnFriendly, the name and type of gretting is preset. When you call johnFriendly, it just needs the final input...timeOfDay
*/
/*
let johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('morning')
johnFriendly('night')

let emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal('morning')
*/

// real world example
/*
let years = [1977, 1985, 1951, 1776, 2000]
function arrayCalc(arr, fn) {
    let arrRes = []
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calculateAge(el) {
    return 2020 - el
}

function isFullAge(limit, el) {
    return el >= limit
}
let ages = arrayCalc(years, calculateAge)

let fullUS = arrayCalc(ages, isFullAge.bind(this, 21))

console.log(ages)
console.log(fullUS)
*/
