/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

evaluated statement ? what to do if true : what to do if false

GOOD LUCK 😀
*/

let johnAvgScore = (131 + 126 + 122) / 3
let mikeAvgScore = (88 + 140 + 123) / 3
let maryAvgScore = (97 + 134 + 105) / 3


/* first, just John and Mike

if (johnAvgScore > mikeAvgScore) {
    console.log('John\'s team is the winner. Avg score: ' + johnAvgScore.toFixed(2))
} else if (johnAvgScore < mikeAvgScore) {
    console.log('Mike\'s team is the winner. Avg score: ' + mikeAvgScore.toFixed(2))
} else {
    console.log('It\'s a tie!! Avg score: ' + johnAvgScore.toFixed(2))
}
*/

// now let's add Mary

if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John\'s team is the winner. Avg score: ' + johnAvgScore.toFixed(2))
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log('Mike\'s team is the winner. Avg score: ' + mikeAvgScore.toFixed(2))
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
    console.log('Mary\'s team is the winner. Avg score: ' + maryAvgScore.toFixed(2))
} else {
    console.log('It\'s a tie!! Avg score: ' + johnAvgScore.toFixed(2))
}
