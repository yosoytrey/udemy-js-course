// CODING CHALLENGE
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Question builder function constructor
function Question(question, options, answer) {
    this.question = question
    this.options = options
    this.answer = answer
    this.makeQuestion = function() {
        console.log(this.question)
        for (let i = 0; i < this.options.length; i++) {
            console.log(`${i}: ${this.options[i]}`)
        }
    }
    this.checkAnswer = function(ans) {
        if (ans === this.answer) {
            console.log('You are correct!')
        } else {
            console.log('Sorry, that is not correct.')
        }
    }
}
// Create questions using the constructor
let q1 = new Question('Who is the president of Ukraine?', ['Zelenska', 'Akhmetov', 'Zelensky', 'Nazarbayev'], 2)

let q2 = new Question('What is the fastest animal?', ['Cheetah','Peregrine Falcon','Dolphin','Road Runner'], 1)

let q3 = new Question('How many colors are in the rainbow?', [6,7,8,9],1)

let q4 = new Question('How many floors are in the Empire State Building?', [89,97,102,110,117],2)

let q5 = new Question('Which of the following numbers is largest?',['kilobyte','terabyte','mebibyte','petabyte'], 3)

// Store them all inside an array
let arrQuestions = [q1,q2,q3,q4,q5]

let playGame = function() {

    let r = Math.floor(Math.random() * arrQuestions.length)
    arrQuestions[r].makeQuestion()

    let answer = prompt('Please select the correct answer to the question in the console. \n Type exit to leave the game.')

    if (answer !== 'exit') {
        arrQuestions[r].checkAnswer(parseInt(answer))
        playGame()
    } else {
        console.log('Thank you for playing.')
    }
}

playGame()




/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)


9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
