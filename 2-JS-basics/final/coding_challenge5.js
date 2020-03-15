
/*** CODING CHALLENGE 5
John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
    1. Create an object with an array for the bill values
    2. Add a method to calculate the tip
    3. This method should include a loop to iterate over all the paid bills and do the tip calculations
    4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip).
*/

let john = {
            fullName: 'John Smith',
            bills: [124.34, 148.99, 268.73, 180.06, 242.23],
            calcTip: function() {
                this.tips = []
                this.totals = []

                for (let i = 0; i < this.bills.length; i++) {
                    let percentage
                    let bill = this.bills[i]

                    if (bill < 50) {
                        percentage = .2
                    } else if (bill >= 50 && bill <= 200) {
                        percentage = .15
                    } else {
                        percentage = .1
                    }
                    this.tips[i] = Math.round((percentage * bill) * 100) / 100
                    this.totals[i] = bill + bill * percentage
                }
            }
        }
/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
    5. Implement the same functionality as before, this time using Mark's tipping rules
*/

let mark = {
            fullName: 'Mark Manson',
            bills: [77.48, 375.88, 110.17, 45.06],
            calcTip: function() {
                this.tips = []
                this.totals = []

                for (let i = 0; i < this.bills.length; i++) {
                    let percentage
                    let bill = this.bills[i]

                    if (bill < 100) {
                        percentage = .1
                    } else if (bill >= 100 && bill <= 300) {
                        percentage = .15
                    } else {
                        percentage = .25
                    }
                    this.tips[i] = Math.round((percentage * bill) * 100) / 100
                    this.totals[i] = bill + bill * percentage
                }
            }
        }

// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

function avgTips(tips) {
    let sum = 0
    for (let i = 0; i < tips.length; i++) {
        sum += tips[i]
    }
    return Math.round(sum / tips.length * 100) / 100
}

// 7. Calculate the average tip for each family
john.calcTip()
mark.calcTip()

// 8. Log to the console which family paid the highest tips on average

john.avg = avgTips(john.tips)
mark.avg = avgTips(mark.tips)

if (john.avg > mark.avg) {
    console.log(john.fullName + '\'s family paid the highest average tips. Avg: ' + john.avg)
} else if (mark.avg > john.avg) {
    console.log(mark.fullName + '\'s family paid the highest average tips. Avg: ' + mark.avg)
} else {
    console.log('The average tip is the same for both families.')
}
