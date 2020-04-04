/*
chapter 3

// exercise 1
let hash = "";
while (hash.length < 7) {
    hash += '#';
    console.log(hash)
}

// exercise 2
for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('buzz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else {
        console.log(i)
    }
}

// exercise 3
let size = 8;
let string = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        string += '# '
    }
    string += '\n'
}
console.log(string)
*/
