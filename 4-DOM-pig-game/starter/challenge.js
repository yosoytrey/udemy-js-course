/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player loses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

let scores, roundScore, activePlayer, gamePlaying, lastDice

init()

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // 0. hide dice in new game
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';


        // 1. random number
        let dice1 = Math.floor(Math.random() * 6) + 1
        let dice2 = Math.floor(Math.random() * 6) + 1

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1.
        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            // next player
            nextPlayer()
        }

    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore

        // 2. update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        let input = document.querySelector('.final-score').value
        let maxScore;

        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if (input) {
            maxScore = input
        } else {
            maxScore = 100
        }

        // 3. Check if the player won the game
        if (scores[activePlayer] >= maxScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            document.querySelector('.btn-hold').style.cursor = 'default'
            document.querySelector('.btn-roll').style.cursor = 'default'

            gamePlaying = false
        } else {
            nextPlayer()
        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0,0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = 'true'

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    document.querySelector('.btn-hold').style.cursor = 'pointer'
    document.querySelector('.btn-roll').style.cursor = 'pointer'
    document.getElementById('fscore').placeholder = 'Max score?';
}

/*
Check to see if user rolls 6 two times in a row

if (dice === 1) {
    nextPlayer()

} else if (dice === 6 && lastDice === 6) {
    roundScore = 0
    document.querySelector('#current-' + activePlayer).textContent = roundScore
    scores[activePlayer] = 0
    document.querySelector('#score-' + activePlayer).textContent = 0
    nextPlayer()
} else {
    //add score
    roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore
    lastDice = dice
}
*/
