/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying

init()

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // 1. set diceDOM
        let diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'none'


        // 2. random number
        let dice = Math.floor(Math.random() * 6) + 1

        // 3. Display the result
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        // 4. Update the round score IF the reolled number was NOT a 1.
        if (dice !== 1) {
            //add score
            roundScore += dice
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

        // 3. Check if the player won the game
        if (scores[activePlayer] >= 10) {
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

//    document.querySelector('.dice').style.display = 'none'
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
}
