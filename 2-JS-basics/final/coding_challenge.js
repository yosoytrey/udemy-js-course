/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like 'Is Mark's BMI higher than John's? true').


GOOD LUCK 😀
*/

let massMica = 70 // kg
let heightMica = 1.73 // meters
let massTrey = 78 // kg
let heightTrey = 1.78 // meters

let bmiTrey = (massTrey / (heightTrey * heightTrey))
let bmiMica = (massMica / (heightMica * heightMica))
bmiTrey = bmiTrey.toFixed(2)
bmiMica = bmiMica.toFixed(2)


if (bmiTrey > bmiMica) {
    console.log("Trey's BMI: " + bmiTrey + '\n' + "Mica's BMI: " + bmiMica)
} else {
    console.log('Trey and Mica have the same BMI.')
}
