/*****************************
* CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

let mark = {firstName: 'Mark',
            lastName: 'Manson',
            mass: 78, // kg
            height:  1.69, // meters
            calcBmi: function() {
                return this.bmi = (this.mass / (this.height * this.height)).toFixed(2)},
            calcFullName: function() {
                return this.fullName = this.firstName + ' ' + this.lastName
            }
}

let john = {firstName: 'John',
            lastName: 'Smith',
            mass: 110, // kg
            height:  1.95, // meters
            calcBmi: function() {
                return this.bmi = (this.mass / (this.height * this.height)).toFixed(2)},

            calcFullName: function() {
                    return this.fullName = this.firstName + ' ' + this.lastName
            }
}



if (mark.calcBmi() > john.calcBmi()) {
    console.log(mark.calcFullName(), 'has a BMI of:', mark.bmi)
} else if (john.bmi > mark.bmi) {
    console.log(mark.calcFullName(), 'has a BMI of:', john.bmi)
} else {
    console.log('Both', mark.fullName, 'and', john.fullName, 'have the same BMI of', john.bmi)
}

console.log(mark.bmi, john.bmi)
