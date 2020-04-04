// calculate the next number by adding the current number to the old number.


function fib(num) {
    let a = 1, b = 0, temp;
    while (num >= 0) {
    temp = a; // new number
    a = a + b; // new number + old number
    b = temp; // old number
    console.log(b)
    num--;
    }
}

console.log(fib(7))
